function setUserName(username) {
    //complex db call
    this.name = username;
}

function createUser(username,email,password) {
    setUserName.call(this, username);

    this.email = email;
    this.password = password;
}

const user1 = new createUser('John Doe', 'hi@gmail,com', '123456');

console.log(user1);