//if and else statement

// const temprature = 30;

// if (temprature > 20) {
//     console.log("It's a hot day");
// } else {
//     console.log("It's a cold day");
// }

// >, <, >=, <=, ==, !=, ===, !==

// const score = 200;

// if (score >= 90) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// } 
//  console.log(`User power: ${power}`);


// const balance = 1000;
// // if (balance > 500) console.log("You have a good balance");

// if (balance > 500) {
//     console.log("You have a good balance");
// } else if (balance > 100) {
//     console.log("You have a low balance");
// }else if (balance > 0) {
//     console.log("You have a very low balance");
// } else {
//     console.log("You are broke");
// }



const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard) {
    console.log("You can make a purchase");
}

const loggedInfromGoogle = true;
const loggedInfromFacebook = false;
if (loggedInfromGoogle || loggedInfromFacebook) {
    console.log("User is logged in");
}