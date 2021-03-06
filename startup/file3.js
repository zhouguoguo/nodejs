var fs = require("fs");
var buf = new Buffer(1024);

console.log("ready to open existing file");
fs.open('input.txt', 'r+', function(err, fd){
	if (err) {
		return console.error(err);
	}
	console.log("file opened");
	console.log("ready to read file");
	
	fs.ftruncate(fd, 10, function(err){
		if (err) {
			console.error(err);
		}
		console.log("file truncated.");

	

	fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
		if (err) {
			console.error(err);
		}
		console.log(bytes + " are read.");
		if (bytes > 0) {
			console.log(buf.slice(0, bytes).toString());
		}
		
		fs.close(fd, function(err){
			if (err) {
				console.log(err);
			}
			console.log("file closed");
		});
	});

	});
});
