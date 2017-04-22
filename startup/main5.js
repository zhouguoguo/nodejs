var fs = require("fs");
var data = 'test for write string\n';

var writerStream = fs.createWriteStream('output.txt');
writerStream.write(data, 'UTF8');
writerStream.end();

writerStream.on('finish', function(){
	console.log("write done.");
});

writerStream.on('error', function(err){
	console.log(err.stack);
});

console.log("Ended");
