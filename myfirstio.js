var fs = require("fs");

var buf = fs.readFileSync(process.argv[2]);

var str = buf.toString();

var cnt = str.split("\n").length;

console.log(cnt - 1);