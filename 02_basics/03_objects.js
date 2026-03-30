//singleton object
//object.create() method creates a new object, using an existing object as the prototype of the newly created object.


//literal object

const mySym = Symbol('mySymbol')


const person = {
    name: 'Rehmat',
    "full name": 'Rehmat Waleed',
    [mySym]: 'This is a symbol',
    age: 21,
    location: 'Pakistan',
    email : 'mrw@gmail.com',
    isStudent: true,
    hobbies: ['coding', 'gaming', 'traveling'],
}

// console.log(person.name) // Accessing properties using dot notation
// console.log(person["age"]) // Accessing properties using bracket notation
// console.log(person["full name"]) // Accessing properties with spaces in the name
// console.log(person[mySym]) // Accessing symbol property

// person.age = 22 // Modifying existing property
// console.log(person.age)
// Object.freeze(person) // Freezing the object to prevent modifications
// person.age = 23 // This will not change the age property
// console.log(person.age) // Still 22, as the object is frozen


person.greeting = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
}
console.log(person.greeting()) // Calling the method to display the greeting message