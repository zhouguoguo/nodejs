var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);

var strbuf = buffer.toString();

var array = strbuf.split('\n');

console.log(array.length - 1);
