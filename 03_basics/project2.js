// MINI PROJECT (ADVANCED 🔥)
// 🔥 Secure Counter App
// Features:
// Private variable (closure)
// Increment function
// Reset function
// Use IIFE
// Use scope properly

// Example
// let counter = createCounter();

// counter.increment(); // 1
// counter.increment(); // 2



const createCounter = (function() {
    let count = 0; // Private variable

    function increment() {
        count++;
        return count;
    }
    function reset() {
        count = 0;
    }
    return {
        increment,
        reset
    };
}
)();

console.log(createCounter.increment());
console.log(createCounter.increment());
createCounter.reset();
console.log(createCounter.increment());


