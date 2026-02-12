//---------------==> How to store data in local Storage <==-----------------//

let obj = {
    name: "rafay",
    age: 50,
}
var stringifiedObj = JSON.stringify(obj);
localStorage.setItem("myObject", stringifiedObj)

//---------------==> Store value using prompt <==-----------------//

// let key = prompt('enter a key name');
// let value = prompt('enter a key value');
// localStorage.setItem(key, value);

// if (value == "red" || value == "blue") {
//     localStorage.clear(key)
// } else if (value == '') {
//     localStorage.clear(key)
// }

// //---------------==> Store Value Useing Input <==-----------------//

const input = document.getElementById('input');
const btn = document.getElementById('button');

btn.addEventListener('click', function () {
    const fullValue = input.value
    localStorage.setItem('key', fullValue)
    console.log("fullValue==>", fullValue)
    
})

// //---------------==> Store Value Useing Todo-list <==-----------------//

// // const testInput = document.getElementById('taskInput');
// // const addTaskButton = document.getElementById('addTaskButton');
// // const list = document.getElementById('taskList');

// // addTaskButton.addEventListener('click', function () {
// //     const inputValue = testInput.value;
// //     const li = document.createElement('li');
// //     li.textContent = inputValue;
// //     // console.log('li==>', li)
// //     // console.log("inputValue", inputValue)
// //     list.appendChild(li)
// //     saveLocalData(inputValue)
// // })

// // function saveLocalData(inputValue) {
// //     const todoData = JSON.parse(localStorage.setItem("todo") || []);
// //     todoData.push(inputValue);
// //     localStorage.setItem("todo", JSON.stringify(todoData))
// // }
// // function getTodoData() {
// //     var gettodo = JSON.parse(localStorage.getItem("todo")) || [];

// //     gettodo.forEach((todo) => {
// //         var li = document.createElement("li");
// //         li.textContent = todo;
// //         list.appendChild(li);
// //     });
// // }

// // getData();


// const testInput = document.getElementById('taskInput');
// const addTaskButton = document.getElementById('addTaskButton');
// const list = document.getElementById('taskList');

// addTaskButton.addEventListener('click', function () {
//     const inputValue = testInput.value;

//     const li = document.createElement('li');
//     li.textContent = inputValue;
//     list.appendChild(li);

//     saveLocalData(inputValue);
//     testInput.value = "";
// });

// function saveLocalData(inputValue) {
//     const todoData = JSON.parse(localStorage.getItem("todo")) || [];
//     todoData.push(inputValue);
//     localStorage.setItem("todo", JSON.stringify(todoData));
// }

// function getTodoData() {
//     var gettodo = JSON.parse(localStorage.getItem("todo")) || [];

//     gettodo.forEach((todo) => {
//         var li = document.createElement("li");
//         li.textContent = todo;
//         list.appendChild(li);
//     });
// }

// getTodoData();


// javascript tast


//-----------------------Write a program to print ever number from array, var arr [1,2,3,4,5,6,7] resilt should be 2,4,6-----------------------//
// const array = [1, 2, 3, 4, 5, 6, 7];

// for (let i = 0; i < array.length; i++) {

//     if (array[i] % 2 == 0) {
//         console.log(array[i])
//     }
// }

// var obj = {
//     userName: 'abdul rafay',
//     age: 50,
//     userData: function () {
//         return `${this.userName} ${this.age}`
//     }
// }
// console.log(obj.userData())
// const list = document.getElementById("list");
// const listItems = `<li>rafay</li><li>rafay</li>`
// list.prepend(listItems);


// for (let i = 10; i >= 1; i--) {

//     var check = `5 * ${i} = ${5 * i} <br>`;
//     document.writeln(check)
// }
// var list2 = document.getElementById('list2');
// var clearButton = document.getElementById('clearButton');



