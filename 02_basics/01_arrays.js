const myArray = [0,1, 2, 3, 4, 5];

// // Accessing elements
// console.log(myArray[0]); // Output: 0
// console.log(myArray[2]); // Output: 2

// // Modifying elements
// myArray[1] = 10;
// console.log(myArray); // Output: [0, 10, 2, 3, 4, 5]

// const fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits[1]); // Output: "Banana"

// const myArray2 = new Array(1,2,3,4); 
// console.log(myArray2); // Output: [1, 2, 3, 4]


//methods


// myArray.push(6); // Adds 6 to the end of the array
// console.log(myArray); // Output: [0, 1, 2, 3, 4, 5, 6]

// myArray.pop(); // Removes the last element (6)
// console.log(myArray); // Output: [0, 1, 2, 3, 4, 5]

// myArray.unshift(-1); // Adds -1 to the beginning of the array
// console.log(myArray); // Output: [-1, 0, 1, 2, 3, 4, 5]

// myArray.shift(); // Removes the first element (-1)
// console.log(myArray); // Output: [0, 1, 2, 3, 4, 5]

// console.log(myArray.length); // Output: 6
// console.log(myArray.indexOf(4)); // Output: 3
// console.log(myArray.includes(9)); 

// const newArray = myArray.join()
// console.log(typeof newArray); // Output: "string"

//slice, splice

// console.log("A" , myArray)
// const myArr1 = myArray.slice(2, 5) 
// console.log(myArr1) 
// console.log("B" , myArray) 
// const myArr2 = myArray.splice(2, 5) 
// console.log("C" , myArray)
// console.log(myArr2) 

// splice modifies the original array and returns the removed elements, while slice does not modify the original array and returns a new array with the selected elements.