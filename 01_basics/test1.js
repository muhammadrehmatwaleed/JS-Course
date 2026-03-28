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




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack and Heap memory

// let a = 10;
// let b = a;

// b = 20;

// console.log(a); // 10
// console.log(b); // 20

// let x = {value: 10};
// let y = x;
// y.value = 20;

// console.log(x.value);



// let k= { x: 1 };
// let l = { x: 1 };

// console.log(k === l); // ? // false because k and l are two different objects in memory, even though they have the same content. In JavaScript, objects are compared by reference, not by value, so k and l are not considered equal because they do not reference the same object in memory.


// //Stings


// let str = "hello";
// str[0] = "H";

// console.log(str);

// // Why no change?
// // In JavaScript, strings are immutable, which means that once a string is created, it cannot be changed. When you try to change a character in the string using str[0] = "H", it does not modify the original string. Instead, it simply ignores the assignment and leaves the string unchanged. Therefore, when you log str, it still outputs "hello".

// let strw = "JavaScript";

// console.log(strw.slice(4, 10));


//++++++++++NUMS++++++++MATHS+++++++DATES+++++++TIMES+++++++++++++++
//  Task15:
// console.log(0.1 + 0.2);

// 👉 Why not exactly 0.3? 
// // The reason why 0.1 + 0.2 does not equal exactly 0.3 in JavaScript (and in many other programming languages) is due to the way floating-point numbers are represented in binary. In JavaScript, numbers are stored as 64-bit floating-point values, which can lead to precision issues when performing arithmetic operations with decimal numbers.

// When you add 0.1 and 0.2, the result is not exactly 0.3 because the binary representation of these numbers cannot be represented with perfect precision. As a result, the sum of 0.1 and 0.2 is actually a number that is very close to 0.3, but not exactly equal to it, which is why you see a result like 0.30000000000000004 instead of 0.3.

// Task16:
// let num = 4.567;

// console.log(num.toFixed(2));

// Task17:
   
// console.log(Math.floor(Math.random() * 100) + 1); // Random number between 1 and 100


// Task18:

// let date = new Date();
// console.log(date.getMonth());
// // Why confusing?
// The getMonth() method in JavaScript returns the month of the date as a zero-based index, which means that January is represented as 0, February as 1, and so on, up to December which is represented as 11. This can be confusing for developers who are used to thinking of months in a one-based format (where January is 1, February is 2, etc.). Therefore, when you call date.getMonth(), it may not return the expected month number if you are not aware of this zero-based indexing.


// Task19:

// let arr = [10, 50, 20];

// console.log(Math.max(...arr)); // 50


// Task20:

// Find difference between two dates in days

// let date1 = new Date('2020-01-01');
// let date2 = new Date('2020-01-10');
// let timeDifference = date2.getTime() - date1.getTime(); // Difference in milliseconds
// let dayDifference = timeDifference / (1000 * 3600 * 24); // Convert milliseconds to days
// console.log(dayDifference); // Output: 9


// Task21:

// Convert into seconds
// let now = Date.now();
// console.log(Math.floor(now / 1000)); // Current time in seconds since January 1, 1970



// Task22:

// let price = 123.456;
// console.log(price.toFixed(2)); // Output: "123.46"



// Task23:

// Generate number 1–6

// console.log(Math.floor(Math.random() * 6) + 1); // Random number between 1 and 6



// Task24:

// Generate 4-digit random OTP

// console.log(Math.floor(1000 + Math.random() * 9000)); // Random 4-digit OTP between 1000 and 9999


// Task25:

// Calculate age using current year

// let birthYear = 2000;
// let currentYear = new Date().getFullYear();
// let age = currentYear - birthYear;
// console.log(age);


// Task26:


// Find days left until New Year

// let newYear = new Date('2026-01-01');
// let today = new Date();
// let timeDifference = newYear.getTime() - today.getTime();
// let daysLeft = Math.ceil(timeDifference / (1000 * 3600 * 24)); // Convert milliseconds to days and round up
// console.log(daysLeft); // Output: Number of days left until New Year


// Task27:

// 👉 Output:
// "10:05:09 PM"
//  let date = new Date().toLocaleString();
// console.log(date);



// Task28:

// 👉 Generate:

// 8 characters
// mix of numbers + letters

// console.log(Math.random().toString(36).slice(-8)); // Generates a random 8-character string consisting of numbers and letters



// Task29:

// 👉 Input:
// 10 seconds

// 👉 Output:
// Countdown in console

// let countdown = 10;
// let interval = setInterval(() => {
//   console.log(countdown);
//   countdown--;
//   if (countdown < 0) {
//     clearInterval(interval);
//     console.log("Countdown finished!");
//   }
// }, 1000);


