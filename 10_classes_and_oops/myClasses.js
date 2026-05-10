//ES6

// class User {
//     constructor(name, email, password) {
//         this.name = name;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword() {
//         //complex encryption logic
//         return `${this.password}abc`;
//     }

//     changeUserName(newName) {
//         return `${this.name.toUpperCase()}`;
//     }

// }

// const user1 = new User('John Doe', 'hi@gmail,com', '123456');

// console.log(user1.encryptPassword());
// console.log(user1.changeUserName());


//Behind the scenes

function User(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function() {
    //complex encryption logic
    return `${this.password}abc`;
}

User.prototype.changeUserName = function(newName) {
    return `${this.name.toUpperCase()}`;
}

const user2 = new User('Jane Doe', 'hi@gmail,com', '123456');

console.log(user2.encryptPassword());
console.log(user2.changeUserName());