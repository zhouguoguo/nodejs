var fs = require("fs");

console.log("ready to read dir");

fs.readdir("/tmp/", function(err, files){
	if (err) {
		return console.error(err);
	}
	console.log("dir readed");
	files.forEach(function(file){
		console.log(file);
	});
});
