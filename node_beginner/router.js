function route(handle, pathname) {
    console.log('Ready to route ' + pathname);
    if (typeof handle[pathname] === 'function')
        return handle[pathname]();
    else {
        console.log('No request handler found for ' + pathname);
        return '404 Not Found';
    }
}

exports.route = route;
