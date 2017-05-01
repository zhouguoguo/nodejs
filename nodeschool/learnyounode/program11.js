var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    var file = fs.createReadStream(process.argv[3]);
    var data = '';
    file.on('data', function(trunk){
        data += trunk;
    });
    file.on('end', function(){
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.write(data.toString());
        res.end();
    });
}).listen(Number(process.argv[2]));
