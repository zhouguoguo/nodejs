process.on('exit', function(code){
	setTimeout(function(){
		console.log("never execute.");
	}, 1000);
	console.log("return code: %d", code);
});

setTimeout(function(){
	console.log("test");
}, 2000);

console.log("Ended");
