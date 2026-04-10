//for of loop
 
//["", "", ""]
//[{}, {}, {}]

const arr = ["a", "b", "c"];
for (const item of arr) {
//   console.log(item);
}

const greeting = "hello";
for (const greets of greeting) {
    // console.log(greets);
    
}

//Maps
// const myMap = new Map();
// myMap.set("name", "john");
// myMap.set("age", 30);
// myMap.set("city", "new york");
// // console.log(myMap);

// for (const [key, value] of myMap) {
//     console.log(`${key}: ${value}`);
// }


// const myObject = {
//     name: "john",
//     age: 30,
//     city: "new york"
// };
// for (const [key, value] of Object.entries(myObject)) {
//     console.log(`${key}: ${value}`);
// }


//for in loop


// const myObject = {
//     js : "javascript",
//     py : "python",
//     java : "java"
// };

// for (const key in myObject) {
//     console.log(`${key}: ${myObject[key]}`);
// }


// const programmingLanguages = ["javascript", "python", "java", "c++"];
// for (const index in programmingLanguages) {
//     console.log(`${index}: ${programmingLanguages[index]}`);
// }


// //Map
// const myMap = new Map();
// myMap.set("name", "john");
// myMap.set("age", 30);
// myMap.set("city", "new york");
// for (const key in myMap) {
//     console.log(`${key}: ${myMap[key]}`);
// }


//for each loop

const coding = ["javascript", "python", "java", "c++"];
coding.forEach((language, index) => {
    console.log(`${index}: ${language}`);
});


const myCoding = [
    { name: "javascript", popularity: 1 },
    { name: "python", popularity: 2 },
    { name: "java", popularity: 3 },
    { name: "c++", popularity: 4 }
]

myCoding.forEach((language) => {
    console.log(`${language.name} is ranked ${language.popularity}`);
});