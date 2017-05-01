var net = require('net');

var client = net.connect({port:8000}, function(){
	console.log('connect server');
});

client.on('data', function(data){
	console.log(data.toString());
	
});


