const userEmail = "user@example.com";

// if (userEmail) {
//   console.log("Email is defined");
// } else {
//   console.log("Email is not defined");
// }

//falsy values: false, 0,-0,Bigint 0n, "", null, undefined, NaN
//truthy values: all values that are not falsy
//"0", " ","false" [], {}, function() {}, true, 1, -1, 0.1, -0.1, Bigint 1n, Symbol("sym") are all truthy values


// const array = [];
// if (array.length === 0) {
//     console.log("Array is empty");
// }


// const emptyObject = {};
// if (Object.keys(emptyObject).length === 0) {
//     console.log("Object is empty");
// }

//Nulish coalescing operator (??) is used to provide a default value when the left-hand side is null or undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
// val1 = null ?? 10 ?? 20
// console.log(val1); // Output: 5


//Ternary operator is a shorthand for if-else statement
// condition ? expressionIfTrue : expressionIfFalse
const age = 18;
const canVote = age >= 18 ? "You can vote" : "You cannot vote";
console.log(canVote); // Output: You can vote