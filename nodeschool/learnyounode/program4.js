var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err, data){
//	console.log('read file from: ' + process.argv[2]);
	if (err) {
		console.error(err);
	}
	else {
//		console.log(data);
		var lines = data.split('\n').length - 1;
		console.log(lines);
	}
});
