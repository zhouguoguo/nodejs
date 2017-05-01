var fs = require('fs');
var path = require('path');

module.exports = function(file, ext, cb){
//	console.log('module function called');
	var list = [];
	var extwdot = '.' + ext;
	fs.readdir(file,  function(err, files){
//		console.log('call back inside');
		if (err) {
			cb(err);
		}
		else {
			files.forEach(function(file){
				if (path.extname(file) === extwdot) {
					list.push(file);
//					console.log('new file found');
//					console.log(list);
				}
			});
//			console.log('list from module: ');
//			console.log(list);
			cb(null, list);
		}
	});
};
