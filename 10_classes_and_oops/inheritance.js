class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`I am a user and my name is ${this.username}`);
    }
}

class Admin extends User {
    constructor(username, adminLevel) {
        super(username);
        this.adminLevel = adminLevel;
    }

    logAdminInfo() {
        console.log(`I am an admin and my name is ${this.username}. My admin level is ${this.adminLevel}.`);
    }
}

const user1 = new User('John Doe');
user1.logMe();
const admin1 = new Admin('Jane Doe', 'super');
admin1.logMe();
admin1.logAdminInfo();

console.log(user1 === admin1); // false
console.log(user1 instanceof User); // true
console.log(admin1 instanceof Admin);
console.log(admin1 instanceof User); // true
    