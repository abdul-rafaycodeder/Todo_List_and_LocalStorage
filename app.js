// console.log(window.localStorage.length)

// const object = {
//     firsName: 'ali',
//     lastName: 'khan'
// }

// // let myName = 'abdul rafay'
// var local = localStorage.setItem('name', object)

// var string = JSON.stringify(object);

console.log(string)
console.log(local)

var obj = {
  uname: "ali",
  age: 20,                                  
};
var objInString = JSON.stringify(obj);
localStorage.setItem("object", objInString);

var getObjectInString = localStorage.getItem("object"); //in string
console.log("getObjectInString",getObjectInString) // in string
