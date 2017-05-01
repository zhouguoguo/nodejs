var http = require("http");
var querystring = require("querystring");

var postHTML = 
	'<html><head><meta charset="utf-8"><title>cnjc Node.js sl�</title></head>' +
  '<body>' +
  '<form method="post">' +
  'name: <input name="name"><br>' +
  'url:  <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';

http.createServer(function(req, res){
	var body = "";
	req.on('data', function(trunk){
		body += trunk;
	});
	req.on('end', function(){
		body = querystring.parse(body);
	
		res.writeHead(200, {'Content-Type':'text/html; charset=utf8'});
		if (body.name && body.url) {
			res.write("name: " + body.name);
			res.write("<br>");
			res.write("url: " + body.url);
		} /*else {
			res.write('waiting for post');
			//res.write(postHTML);
		} */
		res.end();
	});
}).listen(3000, '0.0.0.0');
