var fs = require('fs');
const util = require('util');
const levenary = require("levenary").default;

var fn = fs.readdirSync('.');
fn.sort();

var com = {};
var sch = {};
var ss  = {};

function Community(r) {
	if (!com[r[0]]) com[r[0]] = 0;
	com[r[0]] ++;
}

function School(r) {
	if (!sch[r[0]]) sch[r[0]] = 0;
	sch[r[0]] ++;
}

function StaffStudent(r) {
	if (!ss[r[0]]) ss[r[0]] = 0;
	ss[r[0]] ++;
}

function RemapNames() {

	// find a map from m1 names to m2
	var m1 = "2021-08-21 Community-based cases.csv";
	var m2 = "2021-08-25T0830 Community-based cases.csv";

	var s1 = fs.readFileSync(m1).toString();
	var s2 = fs.readFileSync(m2).toString();

	var r1 = s1.split('\n');
	var r2 = s2.split('\n');

	// brute force fixup map:
	var map = { " CSPP": " EL", 
				" HLS": " HILLS",
				" ENG DES": " GIFTED"


			}

	var l2 = {};
	var l2a = [];

	var bestmap = {};
	var secondmap = {};

	// remember all the "onto" tokens:
	for (var i = 0; i < r2.length; i++) {
		var nm =  r2[i].split(',')[0];
		l2[nm] = 1;
		l2a.push(nm);
	}

	var miss = 0;

	for (var i = 0; i < r1.length; i++) {
		var c1 = r1[i].split(',')[0];
		if (l2[c1]) {
			continue;
		}
		var match = 0;

		// try trimming last token and two tokens:
		{
			var tok = c1.split(' ');
			tok.pop();
			var tok1 = tok.join(' ') + '"';
			if (l2[tok1]) {
				bestmap[c1] = tok1;
				match = 1;
			}
			tok.pop();
			var tok2 = tok.join(' ') + '"';
			if (l2[tok2]) {
				bestmap[c1] = tok2;
				match = 1;
			}
		}

		// replacement?
		for (var m in map) {
			var cx = c1.replace(m, map[m]);
			if (l2[cx]) {
				bestmap[c1] = cx;
				match = true;
				break;
			}
		}
		miss ++;

		if (!match) {
			var close = [];
			var fw = c1.split(' ')[0];
			for (var x = 0; x < l2a.length; x++) {
				var fw0 = l2a[x].split(' ')[0];
				if (fw0 == fw) {
					close.push(l2a[x]);
				}
			}
			if (close.length) {
				var nearmatch = levenary(c1, close);
				console.log("leven", c1, nearmatch, close.length);
				match = 1;

				secondmap[c1] = nearmatch;
			}
		}

		if (!match) {
			console.log("Unmatched", c1, miss);
		}
	}

	console.log("Misses", miss);

	// print map
	console.log("OK map")
	for (var b in bestmap) {
		console.log(b + ", " + bestmap[b]);
	}
	console.log("Levenshtein map")
	for (var b in secondmap) {
		console.log(b + ", " + secondmap[b]);
	}
}


//RemapNames();

function AllRates() {

	var res = [];
	res.push("date,region,caserate");

	for (var f in fn) {
		var fx = fn[f];
		if (fx.indexOf("Case rate") == -1) continue;

		var d = fs.readFileSync(fx).toString();
		var rows = d.split('\n');

		//var d = new Date(fx.substr(0, 10));
		//console.log(d.toString());
		var dt = DayBefore(fx.substr(0, 10));
		for (var i = 0; i < rows.length; i++) {
			if (i == 0) continue;

			// drop 0-rate
			if (rows[i].indexOf(',0') != -1) continue;
			if (rows[i].length < 10) continue;

			res.push(dt + "," + rows[i]);
		}
	}

	var rstr = res.join("\n");
	fs.writeFileSync("LAUSD-rates.csv", rstr);
}

function DayBefore(dt) {
	// push back a day
	var d = new Date(dt).valueOf() - 86400 * 1000;
	var e = new Date(d);
	return e.toISOString().split('T')[0];	
}

function AllActive() {

	var res = [];
	res.push("date,school,community,inschool");

	var rowmerge = {};

	for (var f in fn) {
		var fx = fn[f];
		var comm = false;
		var link = false;

		// merge these -> rowmerge
		if (fx.indexOf("Community") != -1) comm = true;
		if (fx.indexOf("School-linked") != -1) link = true;
		if (fx.indexOf("labels") != -1) continue;

		console.log(fx, comm, link);

		if (!comm && !link) continue;

		var d = fs.readFileSync(fx).toString();
		var rows = d.split('\n');


		var dt = fx.substr(0, 10);
		dt = DayBefore(dt);

		for (var i = 0; i < rows.length; i++) {
			if (i == 0) continue;
			if (rows[i].length < 10) continue;

			var col = rows[i].split(',');
			var rowid = dt + "," + col[0];
			if (!rowmerge[rowid]) {
				rowmerge[rowid] = [0, 0];
			}
			if (comm) rowmerge[rowid][0] = parseInt(col[1]);
			if (link) rowmerge[rowid][1] = parseInt(col[1]);
		}
	}

	var rowpre = [];
	for (var r in rowmerge) {
		var tmp = r + "," + rowmerge[r].join(',');
		rowpre.push(tmp);
	}

	rowpre.sort();
	for (var i = 0; i < rowpre.length; i++) {
		res.push(rowpre[i]);
	}

	var rstr = res.join("\n");
	fs.writeFileSync("LAUSD-active.csv", rstr);
}

AllRates();
AllActive();