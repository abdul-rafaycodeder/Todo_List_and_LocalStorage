// const object = {
//     firsName: 'ali',
//     age: 40
// }

// var string = JSON.stringify(object);
// localStorage.setItem("name", string);
// console.log(string) 

//----------==> Store value useing prompt <==------------//

var key = prompt('enter your kay name');
var value = prompt('enter your value');

let local = localStorage.setItem(key, value);

console.log(`this is a Key==> ${key} this is a value==> ${localStorage.getItem(key)}`)

if(key == "white" || key == "blue"){
    localStorage.removeItem(key)
}
