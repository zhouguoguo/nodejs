var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
	console.log('Connected.');
	eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHandler);
eventEmitter.on('data_received', function() {
	console.log('Data received.');
});

eventEmitter.emit('connection');

console.log("Ended");
