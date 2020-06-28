// scraper for converting various versions of LA public health website -> CSV
var HTML = require('html-parse-stringify2')
var fs = require('fs');
const util = require('util')

// our cron:
var path = "data/";

// older data (alternate date format):
var wayback = "wayback/data/";

// split region into lookup:
var region = {};
{
	var regiondata = fs.readFileSync("region.csv").toString();
	var regionlines = regiondata.split("\r\n");

	for (var i in regionlines) {
		var rs = regionlines[i].split(',');
		region[rs[0]] = rs[1];
	}
}

// via https://stackoverflow.com/questions/1833892/converting-a-string-formatted-yyyymmddhhmmss-into-a-javascript-date-object
// yyyymmddhhmmss -> js date
function convertWaybackDate(d) {
	return new Date(d.replace(
    /^(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)$/,
    '$4:$5:$6 $2/$3/$1'));
}

// find main table
function DFS(o, parser) {

	var c = o.children;
	if (!c) {
		if (Array.isArray(o)) {
			c = o[0].children;
		}
	}

	if (c) {

		for (var ci in c) {
			result = DFS(c[ci], parser);
		}
	}

	if (o.type =='text') {

		// very basic parser state:
		if (parser.inTable) {
			if (o.content.indexOf("Under Investigation") != -1) {
				delete parser.inTable;
			}
		}
		if (o.content.indexOf("CITY/COMMUNITY") != -1) {
			parser.inTable = true;
			parser.table = [];
		} 
	}

	if (parser.inTable) {
		if (o.name == "tr") {
			parser.table.push(new Array());
		}

		// this pulls in th+td usually:
		if (o.content && parser.table.length > 0) {
			var pt = parser.table[parser.table.length - 1];
			if (o.content != ' ') pt.push(o.content);
		}
	}
}

var regerr = {};

function dedupeDiff(rows) {

	var urows = [];
	var diffval = {};

	rows.sort();
	
	var last;
	for (var i = 0; i < rows.length; i++) {
		var rowtok = rows[i].split(',');
		if (rowtok.length < 3) continue;

		// just show first result per day (key = location + date)
		var rowkey = rowtok[0] + rowtok[1];
		if (rowkey == last) continue;

		// compute diff if we can:
		var oldval = diffval[rowtok[1]];
		if (!oldval) oldval = 0;
		diffval[rowtok[1]] = rowtok[2];
		var diff = rowtok[2] - oldval;

		// splice in stuff:		
		var reg = region[rowtok[1]];
		rowtok.splice(2, 0, reg);
		if (!reg) {
			if (!regerr[rowtok[1]]) {
				console.log("No region for", rowtok[1]);				
			}
			regerr[rowtok[1]] = 1;
		}

		// diff right after total cases:
		rowtok.splice(4, 0, diff);

		//urows.push(rows[i]);
		urows.push(rowtok.join(','));
		last = rowkey;
	}
	console.log("Dedupe picked", urows.length, "of", rows.length);

	return urows;
}

function CSVAll(d, filename) {

	var rows = [];

	for (var i in d) {
		var di = d[i];

		if (!di.table) {
			console.log("Skipping", di);
			continue;
		}
		var datestr = d[i].date.toISOString().slice(0, 10);

		for (var t = 0; t < d[i].table.length; t++) {
	
			var row = [];
			var pdata = d[i].table[t];

			if (pdata.length == 0) continue;
			if (pdata.length > 10) continue;

			// remove *s in names: they aren't changes in the names, instead the data:
			pdata[0] = pdata[0].replace(/\*/g, '');
			pdata[0] = pdata[0].replace(',', '-');

			// drop this summary:
			if (pdata[0] == "Los Angeles") continue;

			// NB:  || 0 converts NaN to 0
			row.push(datestr);

			// some ad-hoc formats:
			if (pdata.length == 2) {
				row.push(pdata[0]);
				row.push(parseInt(pdata[1]) || 0);	// only cases
			} else if (pdata.length == 3) {
				row.push(pdata[0]);
				row.push(parseInt(pdata[1]) || 0);	// total
				row.push(parseInt(pdata[2]) || 0);	// case rate
			} else if (pdata.length == 5) {
				row.push(pdata[0]);
				row.push(parseInt(pdata[1]) || 0);
				row.push(parseFloat(pdata[2]) || 0);
				row.push(parseInt(pdata[3]) || 0);
				row.push(parseFloat(pdata[4]) || 0);			
			} else {
				console.log("Skipped", pdata.length, pdata);
			}

			if (row.length > 1) rows.push(row.join(","));
		}
	}

	rows = dedupeDiff(rows);
	var header = "date,location,region,cases,casechange,caserate,deaths,deathrate\n";

	fs.writeFileSync(filename, header + rows.join("\n"));
}

var alldata = [];

//fs.readdir(path, function(err, d) {
var d = fs.readdirSync(path);
{
	console.log("Parsing", d.length);
	for (var f in d) {

		// skip for now
		if (d[f].indexOf('.html') == -1) continue;

		var parse = d[f].split('-');
		var unixdate = 0;
		if (parse.length > 1) {
			unixdate = parseInt(parse[1].split('.')[0]);
		}
		if (!unixdate) {
			console.log("Skipping", d[f]);
			continue;
		}
		var dt = new Date(unixdate * 1000);
		//console.log(d[f], dt.toString());

		// no async
		var contents = fs.readFileSync(path + d[f]);
		var ast = HTML.parse(contents.toString());

		// verbose ast:
		//console.log(util.inspect(ast, false, null, true /* enable colors */))
		var parser = {};
		parser.date = dt;

		DFS(ast, parser);

		alldata.push(parser);
	}
}

// read wayback data
d = fs.readdirSync(wayback);

{
	console.log("Parsing", d.length);
	for (var f in d) {

		// skip for now
		if (d[f].indexOf('.html') == -1) continue;

		var parse = d[f].split('-');

		var wbdate = 0;
		if (parse.length > 1) {
			wbdate = parse[1].split('.')[0];
		}
		if (!wbdate) {
			console.log("Skipping", d[f]);
			continue;
		}
		var dt = convertWaybackDate(wbdate);
		//console.log(d[f], dt.toString());

		// no async
		var contents = fs.readFileSync(wayback + d[f]);
		var ast = HTML.parse(contents.toString());

		// verbose ast:
		//console.log(util.inspect(ast, false, null, true /* enable colors */))
		var parser = {};
		parser.date = dt;

		DFS(ast, parser);

		alldata.push(parser);
	}
}

CSVAll(alldata, "la-covid-feed.csv");
