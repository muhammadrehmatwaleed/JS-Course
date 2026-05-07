//object literal
const user ={
    username: "Muhammad Rehmat Waleed",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log(`Username: ${this.username}, Login Count: ${this.loginCount}, Signed In: ${this.signedIn}`);
        // console.log(this);
    }
}
    
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


//constructor function
function User(username, loginCount, signedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    this.greetUser = function(){
        console.log(`Hello, ${this.username}!`);
    }
    
    return this
}

const user1 = new User("Muhammad Rehmat Waleed", 8, true);
const user2 = new User("John Doe", 5, false);

console.log(user1);
console.log(user2);

//new keyword creates an empty object and sets the context of this to that object, then it executes the constructor function and returns the object.