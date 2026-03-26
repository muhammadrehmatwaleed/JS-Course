// const num = 42;
// console.log(num);

const score = new Number(100);
// console.log(score);

// console.log(score.toString());
// console.log(score.toFixed(2));

const num1 = 124.456;
// console.log(num1.toPrecision(1)); 

const hundred = 1000000;
// console.log(hundred.toLocaleString('en-PK'));

//++++++++++++++++++++MATHS+++++++++++++++++++++++
console.log(Math)
console.log(Math.PI);
console.log(Math.E);

console.log(Math.round(4.7)); // 5
console.log(Math.abs(-4)); // 4
console.log(Math.sqrt(16)); // 4
console.log(Math.pow(2, 3)); // 8
console.log(Math.max(1, 5, 3)); // 5
console.log(Math.min(1, 5, 3)); // 1
console.log(Math.floor(4.7)); // 4
console.log(Math.ceil(4.2)); // 5
console.log(Math.random()); // Random number between 0 and 1
console.log(Math.random()* 10); // Random number between 0 and 10
console.log(Math.floor(Math.random() * 10) + 1); // Random number between 1 and 10

min = 1;
max = 100;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Random number between 1 and 100