function myName () {
    console.log("R");
    console.log("E");
    console.log("H");
    console.log("M");
    console.log("A");
    console.log("T");
}

// myName();

// function add(a, b) {
//     console.log(a + b);
// }


function add(a, b) {
    // let sum = a + b;
    // return sum;

    return a + b;
}
const sum = add(5, 10);
// console.log("Sum:", sum); // Output: Sum: undefined


function greet(name) {
    if (!name) {
        return "Hello, Guest!";
    }
    return `Hello, ${name}!`;
}   

// console.log(greet()); // Output: Hello, Guest!



function calculateCartPrice(val1,...num1) {
    return num1
}
// console.log(calculateCartPrice(100,200,300,400,500));

const user = {
    username: "Rehmat Waleed",
    age: 22,
}

function displayUserInfo(anyUser) {
    console.log(`Name is ${anyUser.username} Age is ${anyUser.age}`);
}
// displayUserInfo(user)
// displayUserInfo({ username: "Ali", age: 20 })

const array = [1, 2, 3, 4, 5];

function index(arr) {
    return arr[1]
}
// console.log(index(array));

console.log(index([10, 20, 30, 40, 50]));