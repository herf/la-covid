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

var settinglog = {
	table: [],
	diff: {}
};

var settingline = [];

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

	if (o.type == 'tag' && o.name == 'table') {
		if (parser.tablenum) parser.tablenum ++;
		else parser.tablenum = 1;

		delete parser.inSetting;
	}

	// $$$
	if (o.name == "small") {
		delete parser.inSetting;
	}

	if (o.type =='text') {

		// very basic parser state:
		if (parser.inTable) {
			if (o.content.indexOf("Under Investigation") != -1) {
				delete parser.inTable;
			}
		}

		if (o.content.indexOf("Setting Name") != -1) {
			parser.inSetting = 1;
			return;
		}
 
		if (o.content.indexOf("CITY/COMMUNITY") != -1) {

			// don't use the secondary tables for now?
			if (!parser.tablenum || parser.tablenum < 2) {
				parser.table = [];
				parser.inTable = 1;
			} else {
				console.log("Skipping table", parser.tablenum);
			}
		} 
	}

	if (parser.inSetting) {
		if (o.content && settingline.length) {
			if (o.content == "Total") {
				//console.log("END", o.content);
				delete parser.inSetting;
			} else if (o.content) {

				// bad filter for row numbers?
				if (settingline.length > 1 || o.content.length > 4) {
					settingline.push(o.content);
				}
			}
		}

		if (o.name == "tr") {
			if (settingline.length) {
				//var tok = settingline.slice(1).join("");
				var tok = settingline[1];
				var oval = settinglog.diff[tok];

				// trim date and compare
				var ovalmerge;
				// ES6 shallow [...copy]:
				if (oval) ovalmerge = [...oval].splice(1).join(",");
				var nvalmerge = [...settingline].splice(1).join(",");

				//console.log(tok, "***", ovalmerge, "***", nvalmerge);
				//console.log(oval, ovalmerge);

				if (ovalmerge != nvalmerge) {
					//if (oval) console.log(parser.date, "Change", nvalmerge, "***", ovalmerge);

					settinglog.table.push(settingline);
					settinglog.diff[tok] = settingline;
				}
			}
			settingline = [];
			// always record date
			settingline.push(parser.date);
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

// remember populations using new data (it was not in older data)
// this dataset has "cases" and "case rate per 100k"
var population = {};

function findPopulation(rows) {
	
	population = {};

	for (var i = 0; i < rows.length; i++) {
		var rowtok = rows[i].split(',');
		if (rowtok.length < 4) continue;

		var pop = parseFloat(rowtok[2]);
		var caserate = parseFloat(rowtok[3]);
		if (caserate == 0) continue;
		pop /= caserate;

		population[rowtok[1]] = Math.round(pop * 100000);
	}

	//console.log(population);
}

function regionTable(rows) {

	var cases = {};
	var last;

	for (var i = 0; i < rows.length; i++) {
		var rowtok = rows[i].split(',');
		var reg = region[rowtok[1]];
		var pop = population[rowtok[1]];

		if (reg == "TBD") continue;
		if (!reg) continue;

		// dedupe as below $$:
		var rowkey = rowtok[0] + rowtok[1];
		if (rowkey == last) continue;
		last = rowkey;

		// date + region slice
		var idtok = rowtok[0] + "," + reg;

		// keep these things about each idtok:
		if (!cases[idtok]) cases[idtok] = {"cases": 0, "pop": 0, "death": 0};

		var cc = cases[idtok];
		cc.cases += parseInt(rowtok[2]);

		if (rowtok.length > 4) cc.death += parseInt(rowtok[4]);
		cc.pop += pop || 0;
	}

	var rows = [];
	for (var c in cases) {
		var r = [];

		var caserate = (cases[c].cases * 100000 / cases[c].pop).toFixed(1);
		var deathrate = (cases[c].death * 100000 / cases[c].pop).toFixed(1);

		if (!isFinite(caserate)) caserate = 0;
		if (!isFinite(deathrate)) deathrate = 0;


		r.push(c);
		r.push(cases[c].cases);
		r.push(caserate);
		r.push(cases[c].death);
		r.push(deathrate);
		r.push(cases[c].pop);
		rows.push(r.join(','));
	}

	rows.sort();

	var header = "date,region,cases,caserate,death,deathrate,population\n";

	fs.writeFileSync('la-covid-region.csv', header + rows.join('\n'));
}

function dedupeDiff(rows, skipregion) {

	var urows = [];
	var diffval = {};

	rows.sort();

	findPopulation(rows);
	if (!skipregion) regionTable(rows);
	
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

		// diff right after total cases:
		rowtok.splice(3, 0, diff);

		// splice in stuff:	
		var reg = region[rowtok[1]];
		rowtok.splice(2, 0, reg);
		if (!reg) {
			if (!regerr[rowtok[1]]) {
				console.log("No region for", rowtok[1]);				
			}
			regerr[rowtok[1]] = 1;
		}
		var pop = population[rowtok[1]] || 0;
		rowtok.splice(3, 0, pop);

		//urows.push(rows[i]);
		urows.push(rowtok.join(','));
		last = rowkey;
	}
	console.log("Dedupe picked", urows.length, "of", rows.length);

	return urows;
}

function CSVAll(d, filename, recentname, settingname) {

	var rows = [];
	var rows60 = [];

	var last60 = new Date(Date.now() - 60 * 86400 * 1000);

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

			if (row.length > 1) {
				rows.push(row.join(","));
				if (d[i].date.valueOf() > last60.valueOf()) {
					rows60.push(row.join(','));
				}
			}
		}
	}

	rows = dedupeDiff(rows);
	rows60 = dedupeDiff(rows60, true);	// skip region from this
	var header = "date,location,region,population,cases,casechange,caserate,deaths,deathrate\n";

	fs.writeFileSync(filename, header + rows.join("\n"));
	fs.writeFileSync(recentname, header + rows60.join("\n"));

	// sort by date:
	settinglog.table.sort(function(a, b){
		return (a[0] > b[0]) - (a[0] < b[0]);
	});

	if (settinglog.table.length) {
		header = "date,name,address,staff,non-staff,deaths\n";

		var settingx = [];
		for (var i = 0; i < settinglog.table.length; i++) {
			var xset = [...settinglog.table[i]];

			// quote location names:
			xset[1] = '"' + xset[1] + '"';
			xset[2] = '"' + xset[2] + '"';

			//settingx.push(settinglog.table[i].join(","));
			settingx.push(xset.join(","));
		}
		fs.writeFileSync(settingname, header + settingx.join("\n"));
	}
}

var alldata = [];

//fs.readdir(path, function(err, d) {
var d = fs.readdirSync(path);
{
	console.log("Parsing", d.length);
	d.sort();
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

		// note our crons are running from 10pm-4am (or 5am-11am GMT)
		// so (yuck) here we offset to "fix" to timestamp to the earlier day if needed:
		// i.e. this is 7h for TZ (so we don't rely on server TZ) and 6h for fetch timing:
		unixdate -= 3600 * 13;
		var dt = new Date(unixdate * 1000);

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
	d.sort();
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

CSVAll(alldata, "la-covid-feed.csv", "la-covid-recent.csv", "la-setting.csv");
