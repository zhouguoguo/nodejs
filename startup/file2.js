var fs = require("fs");

fs.writeFile('input.txt', 'I am to be writing', function(err){
	if (err) {
		return console.error(err);
	}
	console.log("write done.");
	console.log("ready to read");
	
	fs.readFile('input.txt', function(err, data) {
		if (err) {
			return console.error(err);	
		}
		console.log("async reading: " + data.toString());
	});
});
