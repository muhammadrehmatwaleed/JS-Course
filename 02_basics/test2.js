//Interview question: What is the output of the following code?

// 1
// let arr = [1,2,3];
// arr.push(4);
// console.log(arr);

// 2
// slice vs splice

// slice(start, end) - returns a new array containing the elements from the start index to the end index (exclusive). It does not modify the original array.

// splice(start, deleteCount, item1, item2, ...) - modifies the original array by removing elements starting from the start index and optionally adding new items at that position. It returns an array containing the removed elements.

// 3
// let arr = [10,20,30];
// console.log(arr.includes(20)); // Output: true

// 4
// let arr = [1,2,3];
// console.log(arr.reverse()); // Output: [3,2,1]

// 5
// let arr = [1,2,2,3,4,4];
// let uniqueArr = [...new Set(arr)];
// console.log(uniqueArr); // Output: [1, 2, 3, 4]

// 6 : Max Number
// let arr = [10,50,20];
// let max = Math.max(...arr);
// console.log(max); // Output: 50

// 7
// let a = [1,2];
// let b = [3,4];
// let c = a.concat(b);
// console.log(c); // Output: [1, 2, 3, 4]

// 8
// let arr = [1,2,3,4,5,6];
// let evenNumbers = arr.filter(num => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4, 6]


// problems

// // 1
// let arr = [1,2,3,4];
// let sum = arr.reduce((acc, curr) => acc + curr, 0);
// console.log(sum); // Output: 10

// // 2
// let arr1 = [5,10,2,20];
// let max = Math.max(...arr1);
// console.log(max); // Output: 20

// // 3
// let arr2 = [1,2,3,4,5];
// let evenNumbers = arr2.filter(num => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4]

// // 4
// let names = ["ali","ahmed"];
// let upperCaseNames = names.map(name => name.toUpperCase());
// console.log(upperCaseNames); // Output: ["ALI", "AHMED"]

// // 5
// let arr3 = [1,2,2,3,2];
// let count = arr3.reduce((acc, curr) => {
//     acc[curr] = (acc[curr] || 0) + 1;
//     return acc;
// }, {});
// console.log(count); // Output: {1: 1, 2: 3, 3: 1}

// // 6
// let arr4 = [1,[2,3],[4,5]];
// let flatArr = arr.flat();
// console.log(flatArr); // Output: [1, 2, 3, 4, 5]

// // 7 
// let arr5 = [1,2,2,1];
// console.log(arr5.join('') === arr5.reverse().join('')); // Output: true


// Mini Task
//Add task Remove tasks Show tasks

// let todos = [
//     { id: 1, task: "Buy groceries", completed: false },
//     { id: 2, task: "Clean the house", completed: true },
//     { id: 3, task: "Pay bills", completed: false }
// ];

// function addTask(task) {
//     const newTask = {
//         id: todos.length + 1,
//         task: task,
//         completed: false
//     };
//     todos.push(newTask);
// }

// function removeTask(id) {
//     todos = todos.filter(todo => todo.id !== id);
// }

// function showTasks() {
//     console.log(todos);
// }

// addTask("Go for a walk");
// removeTask(2);
// showTasks();


//Objects

//Task1
// let obj = { a: 1, b: 2 };
// console.log(obj.b); // Output: 2

//Task2
// let user = { name: "Ali", age: 20 };
// // Extract both
// // name and age from the user object using destructuring assignment
// let { name, age } = user;
// console.log(name);
// console.log(age);

//Task3
// let obj = {
//   user: {
//     name: "Ali"
//   }
// };

// console.log(obj.user.name); // Output: "Ali"

//Task4

// let user = { name: "Ali" };
// let { name } = user;

// console.log(name);

//Task5

// Create object:
// name, age, city
const person = {
    name: 'Rehmat',
    age: 21,
    city: 'Pakistan'
}

// Change age
person.age = 22;

// Extract all values

console.log(Object.values(person)); // Output: ['Rehmat', 22, 'Pakistan']

// Get city from nested object

const user = {
    name: 'Rehmat',
    address: {
        city: 'Pakistan'
    }
}

// Create function inside object
const personWithFunction = {
    name: 'Rehmat',
    age: 22,
    city: 'Pakistan',
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};