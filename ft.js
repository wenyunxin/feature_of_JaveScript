"use strict";
var R =require('ramda');

// simple recursive function
function factorial(n){
        if (n === 0){
        return 1; 
    }
    return n * factorial(n - 1);
}


var e = factorial(3);
console.log(e);


/* a concise example of closure(including a anonymous function inside)
source: JavaSciript in Wikipedia */
function counter(){
    var cons = 0;
    return function(){
        return ++cons;
    };
}


var c = counter();
var c1 = c();
var c2 = c();
var c3 = c();
console.log(c1, c2, c3);


// function object example
function Ball(r){
    this.radius = r;
    this.area = Math.pi * r * r;   // how to express the math terms?
    this.show = function(){
        //return radius,area; // how to express object.properties in this functin?
    };
}


var newBall = new Ball(5);
console.log(newBall.radius, newBall.area, newBall.show());


// Variadic function demonstration(arguments is a special variable)
function sum(){
    var x = 0;
    for (var i=0; i<arguments.length; ++i){
        x += arguments[i];
    }
    return x;   // do need to return the value
}


var s1 = sum(1,2);
var s2 = sum(1,2,3);
console.log(s1, s2);

// example of object
var bryant = {
	name : 'kobe',
	birth : '1978',
	school : 'Cansas',
	height : 1.96,
	weight : 130,
	score: null
};

console.log(bryant.name);

// example of for...in...
var arr = ['A','B','C'];

for (var i in arr){
    if (arr.hasOwnProperty(i)){
    console.log(i); // the index of item and it is string.
    console.log(arr[i]);
    console.log(typeof(i));
    }
}


// convert string to number without using method:parseInt, Number
function string_to_int(s){
    arr = [];
    for (var i in s){
        if(s.hasOwnProperty(i)){
        arr.push(s[i]);
        }
    }
    
    var result = arr.map(function(x){
        return x*1;
    });

    return result.reduce(function (x, y) {
        return x * 10 + y;
    });
}

var s1 =  string_to_int('13579');
console.log(s1);


// example of filter the prime number in a array
function get_prime(arr){
    var r = arr.filter(
        function (num){
            if(num<2) {return false;}
            for (var i = 2; i<num; i++){
                if(num%i===0){
                return false;
                }
            }
            return true;
        }
        
    );
    return r;//.toString();
}

arr = [1,2,3,4,5,6,7,8,9,11,12,13];
console.log(get_prime(arr));


// import a module
var CreateCounter = require('./closure');
var cc = CreateCounter.CreateCounter();
var cc1 = cc();
var cc2 = cc();
console.log(cc1, cc2);

console.log(CreateCounter.foo(2));


// process.nextTick() will be invoked on next event loop
process.nextTick(function(){
    console.log('nextTick callback!');
});
console.log('nextTicl was set!');


/* Node.js进程本身的事件就由process对象来处理。
   如果我们响应exit事件，就可以在程序即将退出时执行某个回调函数：*/
process.on('exit',function(code){
    console.log('about to exit with code: ' + code);
});

var add = R.curry(function(x, y){
    return x + y;
});

console.log(add(1)(2));

var arr = [undefined, undefined, undefined, null, null, 
    'hello', 'hello', 123, 123, NaN];

var arr1 = R.filter(R.compose(R.not,R.isNil), arr);
console.log(arr1);