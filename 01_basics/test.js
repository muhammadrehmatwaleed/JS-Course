// Variables and Data Types in JavaScript

// Task1:
// Create 3 variables:
// - yourName
// - yourAge
// - isStudent

// Print them using console.log

// let yourName = "Rehmat Waleed"
// let yourAge = 25
// let isStudent = true

// console.table({ yourName, yourAge, isStudent })

// Task2:
// Create a const variable PI = 3.14
// Try changing it → what happens?
// const PI = 3.14;
//  PI = 3.14159; // This will throw an error because PI is a constant variable and cannot be reassigned.
// console.log(PI); // Output: 3.14

// let count = 10;
// count = 20; // This will work because count is a let variable and can be reassigned.
// console.log(count); // Output: 20


// Task3:
// Create variables of these types:
// - String
// - Number
// - Boolean
// - Undefined
// - Null

// Use typeof to print their types
// let score = "100abc"; // score is a string
// let score2 = 123; // score2 is a number
// let score3 = true; // score3 is a boolean
// let score4 = null; // score4 is null
// let score5; // score5 is undefined
// console.table({ score, score2, score3, score4, score5 });
// console.log(typeof score); // Output: string
// console.log(typeof score2); // Output: number
// console.log(typeof score3); // Output: boolean
// console.log(typeof score4); // Output: object (this is a quirk in JavaScript, null is considered an object)
// console.log(typeof score5); // Output: undefined


// Task4:
// let num1 = "50";
// let num2 = "10";

// Convert them into numbers and add them
// Output: 60

// let num1 = "50";
// let num2 = "10";
// let numericNum1 = Number(num1);
// let numericNum2 = Number(num2);
// let sum = numericNum1 + numericNum2;
// console.log(sum);


// Task5:
// let age = 25;

// Convert it into string and print:
// "My age is 25"

// let age = 25;
// // Convert age to a string and print it
// let ageString = String(age);
// console.log("My age is " + ageString); // Output: "My age is 25"


// Task6:
// Convert these into boolean:
// - 0
// - 1
// - ""
// - "hello"

// Print results


// let zero = 0;
// let one = 1;
// let emptyString = "";
// let nonEmptyString = "Hello";

// let isZeroTruthy = Boolean(zero);
// let isOneTruthy = Boolean(one);
// let isEmptyStringTruthy = Boolean(emptyString);
// let isNonEmptyStringTruthy = Boolean(nonEmptyString);

// console.table({ zero, one, emptyString, nonEmptyString, isZeroTruthy, isOneTruthy, isEmptyStringTruthy, isNonEmptyStringTruthy });



// Task7:
// let input = "100";

// Convert it to number and add 50
// Output: 150

// let input = "100";
// let numericInput = Number(input);
// let sum = numericInput + 50;
// console.log(sum); // Output: 150

// Task8:
// Why output is wrong? Fix it

// let a = "10";
// let b = 5;

// console.log(a + b); // Output: "105" because a is a string and b is a number, so JavaScript converts b to a string and concatenates them instead of adding them as numbers.

// To fix it, we need to convert a to a number before adding it to b:
// let a = "10";
// let b = 5;
// let sum = Number(a) + b; // Convert a to a number before adding
// console.log(sum); // Output: 15


// Task9:
// Convert Celsius to Fahrenheit

// let celsius = 30;
// let fahrenheit = (celsius * 9/5) + 32;

// console.log(fahrenheit);


// Task10:
// Create a variable and check:

// if(value) {
//   console.log("Truthy");
// } else {
//   console.log("Falsy");
// }

// Test with:
// - 0
// - "0"
// - null
// - []

// let value1 = 0;
// let value2 = "0";
// let value3 = null;
// let value4 = [];
// console.log("Testing value1:"); 
// if(value1) {
//   console.log("Truthy");
// } else {
//   console.log("Falsy");
// }
// console.log("Testing value2:");
// if(value2) {
//   console.log("Truthy");
// } else {
//   console.log("Falsy");
// }
// console.log("Testing value3:");
// if(value3) {
//   console.log("Truthy");
// } else {
//   console.log("Falsy");
// }
// console.log("Testing value4:");
// if(value4) {
//   console.log("Truthy");
// } else {
//   console.log("Falsy");
// }


// Task11:
// let num1 = "20";
// let num2 = "5";

// // Convert and perform:
// - Addition
// - Subtraction
// - Multiplication
// - Division

// let num1 = "20";
// let num2 = "5";
// let sum = Number(num1) + Number(num2);
// let difference = Number(num1) - Number(num2);
// let product = Number(num1) * Number(num2);
// let quotient = Number(num1) / Number(num2);
// console.table({ num1, num2, sum, difference, product, quotient });

// Task12:
// Predict output BEFORE running:

// console.log("5" + 2);
// console.log("5" - 2);
// console.log(true + 1);
// console.log(false + "1");
// Then explain WHY:
// 1. "5" + 2 results in "52" because the + operator concatenates the string "5" with the number 2, converting the number to a string in the process.
// 2. "5" - 2 results in 3 because the - operator converts the string "5" to a number and then performs the subtraction.
// 3. true + 1 results in 2 because true is converted to 1 when used in a numeric context, so it becomes 1 + 1.
// 4. false + "1" results in "false1" because the + operator concatenates the string "1" with the boolean false, converting the boolean to a string in the process.


// Task13:

// let userAge = "18";
// if (userAge >= 18) {
//   console.log("You can vote.");
// }
// else {
//   console.log("You are underage.");
// }


// Task14:
// // Input:
// let price = "100";
// let tax = "10%";

// // Output:
// Final price after tax = 110

// 👉 Hint:

// Remove "%"
// Convert values
// Calculate properly

// let price = "100";
// let tax = "10%";
// let numericPrice = Number(price);
// let numericTax = Number(tax.slice(0, -1)); // Remove "%" and convert to number
// let finalPrice = numericPrice + (numericPrice * numericTax / 100);
// console.log(finalPrice); // Output: 110




