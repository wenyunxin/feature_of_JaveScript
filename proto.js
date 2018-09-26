function Foo () {}
Foo.prototype.x = 1;

const obj = new Foo();
obj.y = 2;
obj.z = 3;

console.log(obj.y); // 2
console.log(obj.z); // 3
console.log(obj.x); // 1

console.log(obj.hasOwnProperty('x')); // false

console.log(Foo.prototype); // Foo { x: 1 }