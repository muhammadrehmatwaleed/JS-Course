//Functions
//Task1

// function test() {
//   return 5;
// }

// console.log(test());

//Task2

// 🟢 Q2: Parameter vs Argument

// 👉 Explain difference
// between parameter and argument in JavaScript functions.

// 🔹 Parameter: A parameter is a variable that is defined in the function declaration. It acts as a placeholder for the value that will be passed to the function when it is called. Parameters are used to define the inputs that a function can accept
// 🔹 Argument: An argument is the actual value that is passed to a function when it is called. It is the data that is provided to the function to perform its task. Arguments are used to provide the necessary information for the function to execute its logic
// Example:

// function greet(name) { // 'name' is a parameter
//   console.log(`Hello, ${name}!`);
// }  
// greet("Alice"); // "Alice" is an argument

//Task3

// function greet(name = "Guest") {
//   return name;
// }

// console.log(greet());

//Task4

// let x = 10;

// function test() {
//   let x = 20;
//   console.log(x);
// }

// test();

//Task5

// Problem 1: Add Function

// 👉 Create function to add 2 numbers
// function add(a, b) {
//   return a + b;
// }
// console.log(add(5, 10)); // Output: 15


// Problem 2: Even Number Checker
// function evenChecker(num) {
//   return num % 2 === 0;
// }
// console.log(evenChecker(4)); // Output: true
// console.log(evenChecker(7)); // Output: false


// Problem 3: Greeting Function

// function greet(name) {
//     if (!name) {
//         return "Hello, Guest!";
//     }
//     return `Hello, ${name}!`;
// }
// console.log(greet()); // Output: Hello, Guest!


// Problem 4: Max Function

// function maxFunction(a, b) {
//     if (a > b) {
//         return a;
//     }
//     return b;
// }
// console.log(maxFunction(5, 10)); // Output: 10

// Problem 6: Reverse String Function

// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("Hello")); // Output: "olleH"



// functions ,local and global scope, scope level and mini hoisting,this and arrow fun , iife, call stack

// Q1: Scope Output
// let a = 10;

// function test() {
//   let a = 20;
//   console.log(a);
// }

// test(); // Output: 20

// Q2: Arrow this

// 👉 Why arrow fails in object?
// const obj = {
//   name: "Rehmat Waleed",
//   arrowFunc: () => {
//     console.log(this.name); // Output: undefined
//   },
//   regularFunc: function() {
//     console.log(this.name); // Output: Rehmat Waleed
//   }
// };
// obj.arrowFunc();
// obj.regularFunc();

// Q3: IIFE Use

// 👉 Why use IIFE?
// IIFE (Immediately Invoked Function Expression) is used to create a new scope and avoid polluting the global namespace. It allows you to execute a function immediately after defining it, which can be useful for initializing variables or performing setup tasks without leaving any trace in the global scope.

// Q4: Create global + local variable and print both

// let x = 5;

// function test() {
//     let x = 10;
//     console.log(x); // Output: 10
// }
// test();


// function test2() {
//     let y = 20;
//     console.log(x); // Output: 5
//     console.log(y); // Output: 20
// }   
// test2();

// Q5: Create object with method using this
// const user = {
//     username: "Rehmat Waleed",
//     age: 22,
//     welcomeMessage: function() {
//         console.log(`Welcome, ${this.username}!`);
//     }
// }
// user.welcomeMessage(); // Output: Welcome, Rehmat Waleed!

// Q6: Create arrow function and regular function and compare this
// const obj = {
//     name: "Rehmat Waleed",
//     arrowFunc: () => {
//         console.log(this.name); // Output: undefined
//     },
//     regularFunc: function() {
//         console.log(this.name); // Output: Rehmat Waleed
//     }
// };
// obj.arrowFunc();
// obj.regularFunc();

//Q7 Wrap code inside IIFE

// (function() {
//     let x = 10;
//     console.log(x); // Output: 10
// })();
// console.log(x); // ReferenceError: x is not defined

//Q8 Create 3 nested functions and log order
// function one() {
//     console.log("Function one");
//     function two() {
//         console.log("Function two");
//         function three() {
//             console.log("Function three");
//         }
//         three();
//     }
//     two();
// }
// one();

//Q9 Create function that returns another function
// function outer() {
//     return function inner() {
           // console.log("This is the inner function");
//     }
// }
// const innerFunc = outer();
// innerFunc(); // Output: This is the inner function

//Q10 Problem 8: Debug this

// 👉 Fix:

// let user = {
//   name: "Ali",
//   greet: () => {
//     console.log(this.name);
//   }
// };


// user.greet(); // Output: undefined

// // Fix: Change arrow function to regular function
// let user2 = {
//   name: "Ali",
//   greet: function() {
//     console.log(this.name);
//   }
// };
// user2.greet(); // Output: Ali

















