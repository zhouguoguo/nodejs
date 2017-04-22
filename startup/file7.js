var fs = require("fs");

console.log("ready to remove dir");

fs.rmdir("/tmp/test/", function(err) {
	if (err) {
		return console.error(err);
	}
	console.log("dir removed");

	console.log("ready to read dir");
	fs.readdir("/tmp/", function(err, files){
		if (err) {
			return console.error(err);
		}
		files.forEach(function(file){
			console.log(file);
		});
	});
});
