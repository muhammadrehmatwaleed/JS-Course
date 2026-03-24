let score = "100abc"; // score is a string
console.log(score); // Output: "100"
console.log(typeof score); // Output: string
// Convert string to number
let numericScore = Number(score);
console.log(numericScore); // Output: 100
console.log(typeof numericScore); // Output: number
// Convert number to string
let stringScore = String(numericScore);
console.log(stringScore); // Output: "100"
console.log(typeof stringScore); // Output: string  
// Convert string to boolean
let isPassed = Boolean(score);
console.log(isPassed);
console.log(typeof isPassed); // Output: boolean
// Convert boolean to string
let stringPassed = String(isPassed);
console.log(stringPassed); // Output: "true"
console.log(typeof stringPassed); // Output: string
// Convert number to boolean
let isHighScore = Boolean(numericScore);
console.log(isHighScore); // Output: true
console.log(typeof isHighScore); // Output: boolean
// Convert boolean to number
let numericPassed = Number(isPassed);
console.log(numericPassed); // Output: 1
console.log(typeof numericPassed); // Output: number


//Oprations
let value = 3
let negValue = -value;
console.log(negValue); // Output: -3

console.log(2 + 3); // Output: 5
console.log(5 - 2); // Output: 3
console.log(4 * 2); // Output: 8
console.log(10 / 2);    // Output: 5
console.log(10 % 3); // Output: 1
console.log(2 ** 3); // Output: 8   

console.log("1" +  2); // Output: "12" (string concatenation)
console.log("5" - 2); // Output: 3 (string is converted to number)
console.log("10" * 2); // Output: 20 (string is converted to number)
console.log("20" / 4); // Output: 5 (string is converted to number)
console.log(1 +  "2"); // Output: "12" (string concatenation)
console.log("1" +  2  +  2); // Output: "122" (string concatenation)
console.log(1 +  2  +  "2"); // Output: "32" (number addition followed by string concatenation)


let a = 5;
a = ++a; // Unary plus operator, converts a to a number (if it's not already)
console.log(a); // Output: 6

let b = 5;
b = --b; // Unary minus operator, converts b to a number (if it's not already)
console.log(b); // Output: 4

let c = 5;
c = c++; // Postfix increment operator, returns the value before incrementing
console.log(c); // Output: 5 (because c++ returns the value before incrementing)

let d = 5;
d = d--; // Postfix decrement operator, returns the value before decrementing
console.log(d); // Output: 5 (because d-- returns the value before decrementing)