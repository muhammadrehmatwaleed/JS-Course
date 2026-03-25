const name = "Rehmat"
const age = 21

// String concatenation
console.log("My name is " + name + " and my age is " + age);
// Template literals
console.log(`My name is ${name} and my age is ${age}`);


const gameName = new String('dream-cricket');
// console.log(gameName[5]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt('5'));
console.log(gameName.indexOf('c'));

const newString = gameName.substring(0, 3)
console.log(newString);

const anotherString = gameName.slice(-8, 3)
console.log(anotherString);

const newStringOne = "   Hello world   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.youtube.com/watch?v=abc123"
const urlParts = url.split('=')
console.log(urlParts);

console.log(url.replace('youtube', 'vimeo'));
console.log(url.includes('tiktok'));
console.log(url.startsWith('https'));
console.log(url.endsWith('abc123'));
console.log(url.repeat(3));
console.log(url.toUpperCase());
console.log(url.toLowerCase());
console.log(url.concat('hello', 'world'));
console.log(url.charAt(5));
console.log(url.indexOf('w'));
console.log(url.lastIndexOf('w'));
console.log(url.substring(0, 5));
console.log(url.slice(0, 5));
console.log(url.search('youtube'));
