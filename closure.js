"use strict";
/* create a global variable named CreateCounter
   and define as a function */
function CreatCounter(){
    let counter = 0;
    /* definde a local function and assign to a variable named myFunction */
    const myFunction = function(){
        counter = counter + 1;
        return counter;
    };
    return myFunction;
}

// var increament = CreatCounter();
// c1 = increament();
// c2 = increament();
// c3 = increament();
// console.log('examples of closure:', c1, c2, c3);

function foo(n){
    return n * n; 
}

// export as a module
module.exports = {
    CreateCounter : CreatCounter,
    foo : foo
};