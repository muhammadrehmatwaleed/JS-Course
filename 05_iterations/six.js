const myNum = [1,2,3]

// const myTotal = myNum.reduce(function (accumulator, currentValue) {
//     console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
//     return accumulator + currentValue;
// }, 0); // 0 is the initial value of the accumulator

const myTotal = myNum.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(myTotal); // 6


const shoppingCart = [
    { item: "Laptop", price: 999.99 },
    { item: "Headphones", price: 199.99 },
    { item: "Mouse", price: 49.99 },
    { item: "Keyboard", price: 89.99 }
];
const totalPrice = shoppingCart.reduce((total, product) => total + product.price, 0);

console.log(totalPrice); // 1339.96
