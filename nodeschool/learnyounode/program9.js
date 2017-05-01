var http = require('http');

var urls = ['','',''];
var num = 0;

http.get(process.argv[2], function(res){
	var data1 = '';
	res.setEncoding = 'utf8';
	res.on('data', function(trunk){
		data1 += trunk;
	});
	res.on('end', function(){
//		console.log(data1);
		urls[0] = data1;
		num += 1;
		if (num === 3)	{
			urls.forEach(function(url){
				console.log(url);
			});
		}
	});
	
});

http.get(process.argv[3], function(res){
         var data2 = '';
         res.setEncoding = 'utf8';
         res.on('data', function(trunk){
                 data2 += trunk;
         });
         res.on('end', function(){
//		console.log(data2);
                 urls[1] = data2;
                 num += 1;
                 if (num === 3)  {
                         urls.forEach(function(url){
                                 console.log(url);
                         });
                 }
         });
 });

http.get(process.argv[4], function(res){
         var data3 = '';
         res.setEncoding = 'utf8';
         res.on('data', function(trunk){
                 data3 += trunk;
         });
         res.on('end', function(){
//		console.log(data3);
                 urls[2] = data3;
                 num += 1;
                  if (num === 3)  {
                         urls.forEach(function(url){
                                 console.log(url);
                         });
                 }
        });
 });
