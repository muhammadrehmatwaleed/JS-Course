// "use strict"; treate all JS code as new version

// alert(3+3); // we are using in nodejs but not in browser

// Data types in JavaScript

// 1. String "" or ' ' or ` `
let name = "Rehmat Waleed";
console.log(name); // Output: Rehmat Waleed

// 2. Number => 2 to power 53
let age = 21;
console.log(age); // Output: 21
console.log(typeof age); // Output: number
// 3. Boolean true or false
let isStudent = true;
console.log(isStudent); // Output: true
console.log(typeof isStudent); // Output: boolean
// 4. Null standalone value
let emptyValue = null;
console.log(emptyValue);
console.log(typeof emptyValue); // Output: object
// 5. Undefined 

let undefinedValue;
console.log(undefinedValue); // Output: undefined
console.log(typeof undefinedValue); // Output: undefined
// 6. Symbol

let uniqueId = Symbol("id");
console.log(uniqueId); // Output: Symbol(id)
// 7. Object
let person = {
    name: "Rehmat Waleed",
    age: 21,
    isStudent: true
};
console.log(person); // Output: { name: 'Rehmat Waleed', age: 21, isStudent: true }
// 8. BigInt
let bigNumber = BigInt("123456789012345678901234567890");
console.log(bigNumber); // Output: 123456789012345678901234567890n  


console.log(typeof name); // Output: string
console.log(typeof age); // Output: number
console.log(typeof isStudent); // Output: boolean
console.log(typeof emptyValue); // Output: object
console.log(typeof undefinedValue); // Output: undefined
console.log(typeof uniqueId); // Output: symbol
console.log(typeof person); // Output: object
console.log(typeof bigNumber); // Output: bigint