const user = {
    username: "Rehmat Waleed",
    age: 22,

    welcomeMessage: function() {
        console.log(`Welcome, ${this.username}!`);
        console.log(this)
    }
}
// user.welcomeMessage();
// user.username = "Ali";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//     let username = "Rehmat Waleed";
//     console.log(this.username);
// }
// chai();

// const chai = function() {
//     let username = "Rehmat Waleed";
//     console.log(this.username);
// }

const chai = () => {
    let username = "Rehmat Waleed";
    console.log(this);
}
 //chai(); // Output: undefined


 const addTwo = (num1, num2) => {
    return num1 + num2;
 }
console.log(addTwo(5, 10)); // Output: 15


// const addOne = num => num + 10;
// const addOne = num => (num + 10);
const addOne = (num1,num2) => ({username: "Rehmat Waleed"});

console.log(addOne(5)); // Output: 15


// const myArray = [1, 2, 3, 4, 5];

// myArray.forEach