var http = require('http');

http.get(process.argv[2], function(response){
	var data = '';
	var len = 0;
	response.setEncoding('utf8');
	response.on('data', function(trunk){
		data += trunk;
		len += trunk.length;
	});
	response.on('end', function(){
		console.log(len);
		console.log(data);
	});
	response.on('error', function(err){
		return console.error(err);
	});
});
