// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeroes = ["thor", "spiderman", "ironman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    ironman: "suit",

    getSpiderPower: function() {
        console.log(`Power of spiderman is ${this.spiderman}`);
    }
}

Object.prototype.Rehmat = function(hero) {
    console.log('Rehmat is the best hero');
}

Array.prototype.heyRehmat = function() {
    console.log('Rehmat is the best hero in array');
}

// myHeroes.Rehmat();
// heroPower.Rehmat();
// myHeroes.heyRehmat();


//Inheritance in JavaScript is a fundamental concept that allows one object to inherit properties and methods from another object. This is typically achieved through the use of prototypes. In JavaScript, every object has a prototype, which is another object that it inherits properties and methods from. When you try to access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn't find it there, it looks up the prototype chain until it finds the property or method or reaches the end of the chain (null).

// This allows for a powerful and flexible way to create objects and share functionality without the need for classical inheritance as seen in other programming languages. By using prototypes, you can create a base object with common properties and methods, and then create new objects that inherit from it, allowing for code reuse and a more efficient way to manage shared behavior.

const User = {
    name: 'Hitesh',
    email: 'example@gmail.com'
}

const Teachers = {
    makeVideo: true
    }

const TeachingSupport = {
    isAvailable: false
}

const TeacherSupport = {
    makeAssignments: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

// Teacher.__proto__ = User

//Modern Syntax

// Object.setPrototypeOf(TeacherSupport, TeachingSupport);
// Object.setPrototypeOf(Teacher, User)


let anotherUsername = "Chaiandcode        "
String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();

"hitesha     ".trueLength();
