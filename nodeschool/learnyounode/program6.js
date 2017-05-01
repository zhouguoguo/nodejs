var mymodule = require('./mymodule');

var file = process.argv[2];
var ext = process.argv[3];


mymodule(file, ext, function(err, list){
//	console.log('call back outside');
//	console.log('from program:');
	if (err) {
		return console.error(err);
	}
	list.forEach(function(file){
		console.log(file);
	});
//	console.log(list);
});


