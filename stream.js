"use strict";

// data stream
var fs = require('fs');
// create a stream
var rs = fs.createReadStream('ft.js');
rs.on('data', function(chunk){
    console.log('DATA');
    console.log(chunk.toString());
});

rs.on('end', function(){
    console.log('END');
});

rs.on('error', function(err){
    console.log('ERROR: ' + err);
});

// use stream to write data
var ws = fs.createWriteStream('c.js');
ws.write(fs.readFileSync('ft.js'));
ws.write(fs.readFileSync('closure.js'));
ws.end();

// use the method pipe() to copy a file to another
var ws1 = fs.createWriteStream('cf.js');
rs.pipe(ws1);