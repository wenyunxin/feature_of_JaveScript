"use strict";
//设计一个函数 isLength，判断输入值为有效的数组长度，最大有效整数

const MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value){
    value = +value;
    return typeof value == 'number' &&
        value !== NaN &&
        value > -1 &&
        value % 1 == 0 &&
        value <= MAX_SAFE_INTEGER;
}

console.log(isLength(1));

/*设计一个函数 clamp ，它接收三个参数 number、lower、upper。
将 number 固定在最小 lower 和最大 upper 的范围内，并返回新的 number。*/
function clamp(number, lower, upper){
    number = +number;
    lower = +lower;
    upper = +upper;

    lower = lower === lower ? lower : 0;
    upper = upper === upper ? upper : 0;

    if(number === number){
        number = number <= upper ? number : upper;
        number = number >= lower ? number : lower;
    }

    return number;
}

console.log(clamp('a','b','c'));

// 获取数据的第一个元素。
function first(array){
    return (array != null && array.length)
        ? array[0]
        : undefined;
}

console.log(first([]));
console.log(first([0]));


// buffer methods
const buf1 = Buffer.alloc(10);
const buf2 = Buffer.from("hello buffer");
console.log(buf1, buf2);