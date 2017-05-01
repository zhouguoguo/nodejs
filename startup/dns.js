var dns = require("dns");

dns.lookup("www.google.com", function onLookup(err, address, family){
	console.log("ip address: " + address);
	dns.reverse(address, function(err, hostnames){
		if (err) {
			console.log(err.stack);
		}
		console.log("reverse: " + address + ": " + JSON.stringify(hostnames));
	});
});
