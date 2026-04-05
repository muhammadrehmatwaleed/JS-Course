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
