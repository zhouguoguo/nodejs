var fs = require("fs");

console.log("ready to remove file");
fs.unlink('input.txt', function(err){
	if (err) {
		return console.errer(err);
	}
	console.log("file removed");
});
