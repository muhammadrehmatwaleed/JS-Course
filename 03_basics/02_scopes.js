let x = 5;
if (true) {
    let x = 10;
    const y = 20;
    // var z = 30;
    //console.log("Inside block:", x); // Output: Inside block: 10 20
}
//console.log("Outside block:", x); // ReferenceError: x is not defined
 // ReferenceError: z is not defined



 function one() {
    const username = "Rehmat Waleed";
    function two() {
        const website = "rehmatwaleed.com";
        //console.log(username); // Output: Rehmat Waleed
 }
 //console.log(website); // ReferenceError: website is not defined
 //two();
}
//one();


if (true) {
    let a = 10;
    if (true) {
        let b = 20;
        //console.log(a); // Output: 10
    }   
     //console.log(b); // ReferenceError: b is not defined
}

//console.log(a); // ReferenceError: a is not defined


//+++++++++++++++++++++++++Interting++++++++++++++++++++++++++++++++
//addone(5); // Output: 15
function addone(num) {
    return num + 10;
}
//addone(5); // Output: 15


//addtwo(5); // ReferenceError: addtwo is not defined
const addtwo = function(num) {
    return num + 10;
};
//addtwo(5); // Output: 15