var fs = require("fs");
var zlib = require("zlib");

fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('output.txt.gz'));

console.log("Ended");
