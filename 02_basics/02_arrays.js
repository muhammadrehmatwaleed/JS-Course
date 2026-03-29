const marvelHeroes = ["Iron Man", "Captain America", "Thor"];
const dcHeroes = ["Batman", "Superman", "Wonder Woman"];

// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);

// const allHeroes = marvelHeroes.concat(dcHeroes);
// console.log(allHeroes);

// const allHeroes = [...marvelHeroes, ...dcHeroes];
// console.log(allHeroes);

// const anotherArray = [1, 2, 3, [4, 5, 6],[7, 8,[9, 10]]];
// const flatArray = anotherArray.flat(Infinity);
// console.log(flatArray); 

console.log(Array.isArray(marvelHeroes)); // Output: true

console.log(Array.from("Hello")); // Output: ["H", "e", "l", "l", "o"]

console.log(Array.from({name: "Hello"})); // Output: [{name: "Hello"}]

let score1 = 10
let score2 = 20
let score3 = 30

console.log(Array.of(score1, score2, score3)); // Output: [10, 20, 30]