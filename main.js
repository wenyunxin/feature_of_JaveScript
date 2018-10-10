// iterator a Map structure
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
  console.log(key + " is " + value);
}

// object的对象存储器
var obj = {
  my_name : 'bryant',

  get name(){
    console.log('===');
    console.log(this.my_name);
    console.log('------');
    return this.my_name;
  }

};

console.log(obj.name);
Object.freeze(obj);