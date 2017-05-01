var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket){
//	console.log('client connected');
	var str = strftime('%F %R', new Date());
	socket.end(str + '\n');	
});
server.listen(Number(process.argv[2]));
