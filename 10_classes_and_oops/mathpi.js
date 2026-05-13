const descriptor = Object.getOwnPropertyDescriptors(Math, 'PI');
// console.log(descriptor);

// console.log(Math.PI); // 3.141592653589793
// Math.PI = 5 // TypeError: Cannot assign to read only property 'PI' of object '[object Math]'
// console.log(Math.PI); // 3.141592653589793


const chai = {
    name: 'chai',
    price: 100,
    isAvailable: true,

    orderChai: function() {
        console.log("Order placed for chai");
    }
}

console.log(Object.getOwnPropertyDescriptors(chai, "name"));

Object.defineProperty(chai, "name", {
    //writable: false,
    enumerable: false,
})
console.log(Object.getOwnPropertyDescriptors(chai, "name"));


for(let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
}