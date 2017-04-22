var fs = require("fs");

fs.readFile('input.txt', function(data, err) {
	if (data) return console.error(data);
	console.log(err.toString());
})

console.log("End1");
