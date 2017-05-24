function route(handle, pathname, rsp, req) {
    console.log('Ready to route ' + pathname);
    if (typeof handle[pathname] === 'function')
        handle[pathname](rsp, req);
    else {
        console.log('No request handler found for ' + pathname);
	rsp.writeHead(404, {'Content-Type':'text/plain'});
	rsp.end('404 Not Found');
    }
}

exports.route = route;
