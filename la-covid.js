// scraper for converting various versions of LA public health website -> CSV

// TODO: HANDLE NAN

var HTML = require('html-parse-stringify2')
var fs = require('fs');
const util = require('util')

// our cron:
var path = "data/";

// older data (alternate date format):
var wayback = "wayback/data/";

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
			//console.log(c[ci]);
			result = DFS(c[ci], parser);
			//if (result) return result;
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
			//console.log(o);
			parser.table.push(new Array());
		}

		// this pulls in th+td usually:
		if (o.content && parser.table.length > 0) {
			var pt = parser.table[parser.table.length - 1];
			if (o.content != ' ') pt.push(o.content);
		}
	}
}

function dedupe(rows) {

	var urows = [];
	rows.sort();
	
	var last;
	for (var i = 0; i < rows.length; i++) {
		if (rows[i] != last) {
			urows.push(rows[i]);
		}
		last = rows[i];
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

			// drop this summary:
			if (pdata[0] == "Los Angeles") continue;

			// remove *s in names: they aren't changes in the names, instead the data:
			pdata[0] = pdata[0].replace(/\*/g, '');

			// NB:  || 0 converts NaN to 0
			row.push(datestr);
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

	rows = dedupe(rows);
	var header = "date,location,cases,caserate,deaths,deathrate\n";

	fs.writeFileSync(filename, header + rows.join("\n"));
}

var alldata = [];

//fs.readdir(path, function(err, d) {
var d = fs.readdirSync(path);

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
//});

// read wayback data
d = fs.readdirSync(wayback);

//fs.readdirSync(wayback, function(err, d) {
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
//});

CSVAll(alldata, "la-covid-feed.csv");