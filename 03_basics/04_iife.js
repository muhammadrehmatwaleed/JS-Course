//Immediately Invoked Function Expression (IIFE)
//A function that runs as soon as it is defined
(function() {
    console.log("This is an IIFE");
})(); // Output: This is an IIFE

// IIFE with parameters
( (name) => {
    console.log(`Hello, ${name}!`);
})("Rehmat Waleed"); // Output: Hello, Rehmat Waleed!