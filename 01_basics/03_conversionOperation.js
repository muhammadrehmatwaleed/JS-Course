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


