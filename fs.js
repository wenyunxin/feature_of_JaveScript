"use strict";

var fs = require('fs');

// fs async file reading
fs.readFile('closure.js', 'utf-8', function(error, data){
    if (error){
        console.log(error);
    } else {
        console.log(data);   // without character set need to convert file contents to string
    }
    // var buf = Buffer.from(data);
    // console.log(buf);
});
console.log('begin to read the js file');
// how to specify a time the async end?

var f = fs.readFileSync('closure.js');
console.log(f);
console.log('read this sync');


// to read a file and then write it into a new file
fs.writeFile('cf.js', f, function(error){
    if (error){
        console.log(error);
    } else {
        console.log('done');
    }
});

fs.writeFileSync('c.js', f);


// get a file's status
fs.stat('closure.js', function(error, stat){
    if (error) {
        console.log(error);
    } else {
        console.log('isFile: ' + stat.isFile());
        console.log('isDiretory: ' + stat.isDirectory());
        if (stat.isFile()) {
            console.log('size: ' + stat.size);
            console.log('birth time: ' + stat.birthtime);
            console.log('modified time: ' + stat.mtime);
        }     
    }
});

var s = fs.statSync('ft.js');
console.log(s);