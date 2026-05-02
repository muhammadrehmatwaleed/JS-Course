// const promiseOne = new Promise((resolve, reject) => {
//     // Do an async task
//     // DB calls, cryptography, network calls
//     setTimeout(() => {
//         console.log('Async task is complete');
//         resolve();
//     }, 1000);
// });

// promiseOne.then(() => {
//     console.log('Promise consumed');
// })

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Async task 2 is complete');
//         resolve();
//     }, 1000);
// }).then(() => {
//     console.log('Promise 2 consumed');
// })

// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Async task 3 is complete');
//         resolve({ name: 'John', age: 30 });
//     }, 1000);
// });

// promiseThree.then((data) => {
//     console.log('Promise 3 consumed', data);
// })

// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             resolve({ name: 'Jane', age: 25 });
//         } else {
//             reject('Something went wrong');
//         }
//    }, 1000);
// });

// promiseFour.then((data) => {
//     console.log('Promise 4 consumed', data);
//     return data.name;
// }).then((data) => {
//     console.log('Chaining another then', data);
// }).catch((error) => {
//     console.log('Error:', error);
// }).finally(() => {   
//     console.log('This will always run');
// });



const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ name: 'Jane', age: 25 });
        } else {
            reject('JS went wrong');
        }
    }, 1000);           
});

async function consumePromiseFive() {
    try {
        const data = await promiseFive;
        console.log('Promise 5 consumed', data);
    } catch (error) {
        console.log('Error:', error);
    }
}
consumePromiseFive();

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log('Error fetching users:', error);
//     }
// }
// getAllUsers();  


fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log('Error fetching users:', error);
    });

    // // promise.all
// // yes this is also available, kuch reading aap b kro.








//     const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is compelete');
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)

// }).then(function(){
//     console.log("Async 2 resolved");
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email: "chai@example.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

//  promiseFour
//  .then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected"))



// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// });

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()

// // async function getAllUsers(){
// //     try {
// //         const response = await fetch('https://jsonplaceholder.typicode.com/users')

// //         const data = await response.json()
// //         console.log(data);
// //     } catch (error) {
// //         console.log("E: ", error);
// //     }
// // }

// //getAllUsers()

// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error))

// // promise.all
// // yes this is also available, kuch reading aap b kro.