var http = require('http');
var url = require('url');

function start(handle, route) {
    http.createServer(function(req, rsp){
        var pathname = url.parse(req.url).pathname;
        console.log('Request for ' + pathname + ' received.');
        route(handle, pathname, rsp, req);
    }).listen(8082, '0.0.0.0');

    console.log('Server is listening at 8082...');
}

exports.start = start;
