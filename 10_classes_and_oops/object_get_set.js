const User = {
    name: 'Hitesh',
    email: 'john@gmail.com',

    get userEmail() {
        return this.email.toUpperCase();
    },
    set userEmail(newEmail) {
    this.email = newEmail;
    }
}

console.log(User.userEmail); //

const tea = Object.create(User);
console.log(tea.email);
