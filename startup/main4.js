var fs = require("fs");
var data = '';

var readerStream = fs.createReadStream('input.txt');

readerStream.setEncoding('UTF8');

readerStream.on('data', function(trunk){
	data += trunk;
	console.log("data happended");
});

readerStream.on('end',function(){
	console.log("end happended");
	console.log(data);
});

readerStream.on('error', function(err){
	console.log(err.stack);
});

console.log("Ended");
