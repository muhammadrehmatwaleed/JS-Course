const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumber = myNumber.map((num) => num * 2);

// const newNumber = [];
// myNumber.forEach((num) => {
//     newNumber.push(num * 2);
// });


const newNumber = myNumber.map((num) => num * 2).map((num) => num + 1).filter((num) => num === 11);  


console.log(newNumber); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

