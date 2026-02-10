// const object = {
//     firsName: 'ali',
//     age: 40
// }

// var string = JSON.stringify(object);
// localStorage.setItem("name", string);
// console.log(string) 

//---------------==> Store value useing prompt <==-----------------//


// let key = prompt('enter your kay name');
// let value = prompt('enter your value');

// localStorage.setItem(key, value);

// if (value == "red" || value == "blue"){
//     localStorage.removeItem(key)
// }

// console.log(`this is a Key==> ${key} this is a value==> ${localStorage.getItem(key)}`)


//---------------==> Store Value Useing Input <==-----------------//

const input = document.getElementById('input');
const btn = document.getElementById('button');

btn.addEventListener('click', function (){
    const fullValue = input.value
    localStorage.setItem('key', fullValue)
    console.log("fullValue==>",fullValue)
})

//---------------==> Store Value Useing Todo-list <==-----------------//

const testInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const list = document.getElementById('taskList');

addTaskButton.addEventListener('click', function (){
    const inputValue = testInput.value;
    const li = document.createElement('li');
    li.textContent = inputValue;
    console.log('li==>',li)
    console.log("inputValue",inputValue)
})

