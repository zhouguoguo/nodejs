var fs = require("fs");

console.log("ready to open file");

fs.open('input.txt', 'r+', function(err, fd){
	if (err) {
		return console.error(err);
	}
	console.log("open successfully");
});
