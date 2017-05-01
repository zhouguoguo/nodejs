var http = require('http');
var map = require('through2-map');

http.createServer(function(req, res){
        var body = '';
        req.on('data', function(trunk){
            body += trunk;
        });
        req.on('end', function(){
            
        });
});
