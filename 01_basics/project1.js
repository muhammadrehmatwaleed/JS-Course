let name = "Rehmat"
let birthYear = 2005
let price = 9999
let discount = "10%"


let currentYear = new Date().getFullYear()
let age = currentYear - birthYear
// console.log(age)


let discountedPrice = price - (price * parseFloat(discount) / 100)
// console.log(discountedPrice)\

let otp = 1000 + Math.floor(Math.random() * 9000) // Generate a random 4-digit number



let newYear = new Date('2026-01-01');
let today = new Date();
let timeDifference = newYear.getTime() - today.getTime();
let daysLeft = Math.ceil(timeDifference / (1000 * 3600 * 24)); // Convert milliseconds to days and round up
// console.log(daysLeft); // Output: Number of days left until New Year

console.table({ name,  age, otp, discountedPrice, daysLeft })