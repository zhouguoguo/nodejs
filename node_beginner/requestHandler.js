var querystring = require("querystring");
var fs = require('fs');
var formidable = require('formidable');

function start(rsp, req) {
    console.log('start function called');
    
  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="file" name="upload" multiple="multiple">'+
    '<input type="submit" value="Upload file" style="color:red;"/>'+
    '</form>'+
    '</body>'+
    '</html>'
    '<script type="javascript"> var a = 1;  </script>';
    rsp.writeHead(200, {'Content-Type':'text/html'});
    rsp.write(body);
    rsp.end();
}

function upload(rsp, req) {
    console.log('upload function called');
    var form = new formidable.IncomingForm();
    console.log('about to parse');
    form.parse(req, function(err, fields, files) {
	  console.log("parsing done");
	  fs.renameSync(files.upload.path, "/tmp/test.png");
          rsp.writeHead(200, {'Content-Type': 'text/html'});
          rsp.write('received image:<br/>');
          rsp.write("<img src='/show' />");
	  rsp.end();
    });
}

function show(rsp, req) {
	console.log('show function called');

	fs.readFile('/tmp/test.png', 'binary', function(error, file){
		if (error) {
			rsp.writeHead(500, {'Content-Type':'text/plain'});
			rsp.write(error + '\n');
			rsp.end();
		}
		else {
			rsp.writeHead(200, {'Content-Type':'image/png'});
			rsp.write(file, 'binary');
			rsp.end();
		}
	});
}

exports.start = start;
exports.upload = upload;
exports.show = show;
