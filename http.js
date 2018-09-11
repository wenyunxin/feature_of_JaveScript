"use strict";

var http = require('http');
// create server
var server = http.createServer(function(request,response){
    // get the request.method and request,url
    console.log(request.method + ':' + request.url);
    // get the response
    response.writeHead(200, {'Content-Type':'text/html'});
    // pass content to response
    response.end('<h1>hello world!<h/1>');
});

server.listen(8080);    // listenning port 8080
console.log('server is running at http://127.0.0.1:8080/'); // run the server

// file server 
var url = require('url');
console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));

// path module
var path = require('path');
var workDir = path.resolve('.');
var filePath = path.join(workDir, 'http.js');
console.log(filePath);