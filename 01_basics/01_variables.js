const myName = "Rehmat Waleed";
let myAge = 21;
var myCity = "Gojra";
myVillage = "Chak 367 JB";

// myName = "M Rehmat Waleed"; // This will throw an error because myName is a constant variable     
myAge = 22; // This will work because myAge is a let variable
myCity = "Lahore"; // This will work because myCity is a var variable
myVillage = "Chak 368 JB"; // This will work because myVillage is a global variable

console.table({ myName, myAge, myCity, myVillage });

// prefer not to use var and global variables as they can lead to unexpected behavior and bugs in larger codebases. Use const for variables that won't change and let for variables that may change.