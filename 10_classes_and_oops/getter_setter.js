class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(newEmail){
        this._email = newEmail;
    }

    get password(){
        return `${this._password}Rehmat`;
    }
    set password(newPassword){
        this._password = newPassword;
    }
}

let user1 = new User("john@example.com", "password123");
console.log(user1.password); // password123
console.log(user1.email); //