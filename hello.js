var http = require('http');

var localAddress = '127.0.0.1';
var localPort = 1337;
var localUrl = 'http://' + localAddress + ':'+ localPort +'/';

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(localPort, localAddress)

console.log( 'Server running at ' + localUrl );
