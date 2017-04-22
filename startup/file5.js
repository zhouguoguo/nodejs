var fs = require("fs");

console.log("ready to create dir");

fs.mkdir("/tmp/test/", function(err){
	if (err) {
		return console.error(err);
	}
	console.log("dir created");
});
