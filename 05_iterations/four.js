// const coding = ["javascript", "python", "java", "c++"];

// const value = coding.forEach((item) => {
//     console.log(item);
//     return item; // This return value is ignored by forEach
// });
// console.log(value); //undefined


const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNum.filter((num) => num % 2 === 0);

// const newNum = []

// myNum.forEach((num) => {
//     if (num % 2 === 0) {
//         newNum.push(num);
//     }
// });

// console.log(newNum); // [2, 4, 6, 8, 10]


const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
    { title: "Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "1984", author: "George Orwell", year: 1949 }
];

let oldBooks = books.filter((book) => book.year < 1950);
oldBooks = books.filter((book) => {return book.year < 1950});

console.log(oldBooks);
