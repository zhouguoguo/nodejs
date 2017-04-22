var fs = require("fs");

console.log("ready to open file");

fs.stat('input.txt', function(err, stat){
	if (err) {
		return console.error(err);
	}
	console.log(stat);
	console.log("read file information successfully");

	console.log("file? " + stat.isFile());
	console.log("dir? " + stat.isDirectory());
});
