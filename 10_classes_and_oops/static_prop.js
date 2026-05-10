class User {
    constructor(username) {
        this.username = username;
    }
    LogMe() {
        console.log(`I am a user and my name is ${this.username}`);
    }

    static createID() {
        return Math.floor(Math.random() * 1000);
    }
}

const user1 = new User('John Doe');
// console.log(User.createID());

class Teacher extends User {
    constructor(username, subject) {
        super(username);
        this.subject = subject;
    }
}

const teacher1 = new Teacher('Jane Doe', 'Math');
console.log(teacher1.createID());