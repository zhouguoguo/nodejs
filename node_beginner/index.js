var server = require('./server.js');
var requestHandler = require('./requestHandler.js');
var router = require('./router.js');

var handle = {};
handle['/'] = requestHandler.start;
handle['/start'] = requestHandler.start;
handle['/upload'] = requestHandler.upload;
handle['/show'] = requestHandler.show;
server.start(handle, router.route);
