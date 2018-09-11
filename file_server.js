"use strict";

var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

// get the root diretory, the default is the present diretory.
var root = path.resolve(process.argv[2] || '.');
console.log('Static root dir: ' + root);

// build server
var server = http.createServer(function(request, response){
    // get the url path
    var pathname = url.parse(request.url).pathname;
    // get the diretory of local files
    var filepath = path.join(root, pathname);
    // get the state of file
    fs.stat(filepath, function(err, stats){
        // if no error and stats.isFile is true
        if (!err && stats.isFile()){
            console.log('200 ' + request.url);
            // write 200 response
            response.writeHead('200');
            // lead the file to response
            fs.createReadStream(filepath).pipe(response);
        } if (!err && stats.isDirectory){
            console.log(fs.readdir(filepath, function(err, files){
                if (err){
                    console.log(err);
                } else {
                    for (var file of files){
                        if (file === 'index.html' || file === 'default.html'){
                        console.log('200 ' + file);
                        response.writeHead('200');
                        fs.createReadStream(path.join(filepath, file)).pipe(response);
                        }
                    }
                }
            }));
        } else {
            // error or the file isn't exist
            console.log('404 ' + request.url);
            // write 404 response
            response.writeHead('404');
            response.end('404 Not Found');
        }
    });
});

server.listen(8080);
console.log('server is running at http://127.0.0.1:8080/');