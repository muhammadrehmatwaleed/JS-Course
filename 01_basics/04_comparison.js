console.log(5 > 3); // Output: true
console.log(2 < 1); // Output: false
console.log(4 >= 4); // Output: true
console.log(3 <= 2); // Output: false
console.log(5 == "5"); // Output: true (loose equality, type coercion occurs)
console.log(5 === "5"); // Output: false (strict equality, no type coercion)
console.log(5 != "5"); // Output: false (loose inequality, type coercion occurs)
console.log(5 !== "5"); // Output: true (strict inequality, no type coercion)

console.log("02" > 1); // Output: true (string "02" is converted to number 2, and 2 > 1 is true)
console.log("2" > 1); // Output: true (string "2" is converted to number 2, and 2 > 1 is true)

console.log(null == 0); // Output: false (null is only loosely equal to undefined, not to any other value)
console.log(null > 0 ); // Output: false (null is converted to 0 for comparison, and 0 > 0 is false)
console.log(null < 0); // Output: false (null is converted to 0 for comparison, and 0 < 0 is false)

console.log(undefined == 0); // Output: false (undefined is not equal to any value except null)

//===
console.log(0 === false); // Output: false (strict equality, no type coercion)