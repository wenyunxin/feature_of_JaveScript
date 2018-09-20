import * as R from 'ramda';
//this在箭头函数中的指向
var bryant = {
    name : 'kobe',
    age : 40,
    team : 'lakers',
    score : 81,

    plays: function(){
        var getScore = ()=> this.name + ' beat them with ' + this.score;
        console.log(this.name, this.score);
        return getScore();  // return the result of function implement
    }
    
};

console.log(bryant.plays());

// arrow function的使用场景之一
var elements = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
console.log(elements.map(length =>  // map函数接受的参数顺序：element, index, array
    length
));

// map与parseInt的结合使用
var arr = [1, 3, 5];
arr.map((element, index, array)=>{
    console.log(element);
    console.log(index);
    console.log(array);
});
console.log(arr.map(parseInt));

// R.filter
var data = [{"id":"7119bf63-eadd-4ff0-8445-20bc4d525f2c","title":"title 1","content":"content 1","completed":true,"createAt":"Sat Feb 10 2018 19:18:04 GMT+0800 (CST)","completedAt":""},{"id":"b85cba6c-1489-43b3-a40b-61a7af488d29","title":"title 2","content":"content 2","completed":false,"createAt":"Sat Feb 10 2018 19:18:04 GMT+0800 (CST)","completedAt":""},{"id":"7594756d-552a-4234-8475-732fbe48a79e","title":"title 3","content":"content 3","completed":true,"createAt":"Sat Feb 10 2018 19:18:04 GMT+0800 (CST)","completedAt":""}];

var items = R.filter((n=> !n.completed), data);
console.log(items);