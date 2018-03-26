var http = require('http');
var dt = require('./myFirstModule');


//create a server object:
http.createServer(function (req, res) {
    //res.writeHead(200, {'Content-Type': 'text/html'});
	 res.write("The date and time are currently: " + dt.myDateTime());	//write a response to the client
    res.end('Hello World!');	//end the response
}).listen(8085);  //the server object listens on port 8085