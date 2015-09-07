var http = require('http');

http.createServer( function(request, response) {
    response.writeHead(200);
    response.write("Hello, this is Dan.");
    //setTimeout( function() {
//	response.write("Dan is done");
//	response.end();
//    }, 5000);
    response.end();
    /*request.on('readable', function() {
	var chunk = null;
	while (null !== (chunk = request.read())) {
	    console.log(chunk.toString());
	}
    });
    request.on('end', function() {
	response.end();
    });*/
//    request.pipe(response);

}).listen(8080);
console.log('listening on port 8080...');
