// const tinderUser = new Object(); // Object constructor syntax

const tinderUser = {}; // Object literal syntax


tinderUser.name = 'Rehmat';
tinderUser.age = 21;
tinderUser.isLoggedIn = true;
tinderUser.lastLoginDate = '2024-06-01';

// console.log(tinderUser)

const regularUser = {
    email: "waleed@example.com",
    fullname: {
        userFullName: {
            firstName: 'Rehmat',
            lastName: 'Waleed'
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName)


const obj1 = {
    key1: 'value1',
    key2: 'value2'
}

const obj2 = {
    key3: 'value3',
    key4: 'value4'
}

// const mergedObj = Object.assign({}, obj1, obj2) // Merging obj1 and obj2 into a new object

const mergedObj = {...obj1, ...obj2} // Using spread operator to merge obj1 and obj2 into a new object

// console.log(mergedObj)


const user = [
    {
        userId: 1,
        firstName: 'Rehmat',
        lastName: 'Waleed',
        email: 'rehmat@example.com'
    },
    {
        userId: 2,
        firstName: 'Ali',
        lastName: 'Khan',
        email: 'muhammad@example.com'
    }
]

// console.log(user[0].firstName) // Accessing firstName of the first user in the array

// console.log(Object.keys(user[0])) // Getting all keys of the first user object
// console.log(Object.values(user[0])) // Getting all values of the first user object
// console.log(Object.entries(user[0])) // Getting all key-value pairs of the first user object as an array of arrays
// console.log(user[0].hasOwnProperty('email')) // Checking if the first user object has the 'email' property



//object de structuring


const course = {
    courseName: 'JavaScript Basics',
    courseDuration: '4 weeks',
    courseInstructor: 'Rehmat Waleed',
}

const {courseName : name} = course // Destructuring the course object to extract properties into variables
// console.log(courseName) // This will throw an error because courseName is not defined in the current scope
console.log(name) // Output: JavaScript Basics


// const navbar = ({company}) => {


// }

// navbar(company = "Google")


//api intro

// {
//     "name": "Rehmat Waleed",
//     "age": "21",
//     "email": "rehmat@example.com"
// }


// [
//     {},
//     {},
//     {}

// ]

