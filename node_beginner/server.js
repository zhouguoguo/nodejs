var http = require('http');
var url = require('url');

function start(handle, route) {
    http.createServer(function(req, rsp){
        var pathname = url.parse(req.url).pathname;
        console.log('Request for ' + pathname + 'received.');
        
        var content = route(handle, pathname);

        rsp.writeHead(200, {'Content-Type':'text/plain'});
        rsp.end(content);
    }).listen(8082);

    console.log('Server is listening at 8082...');
}

exports.start = start;
