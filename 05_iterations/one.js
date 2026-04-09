//for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (i == 5) {
//         console.log("5 is found");
//     }
//     console.log(element);
    
// }

for (let i = 1; i <= 10; i++) {
    //console.log(`i: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`i: ${i}, j: ${j}`);
        //console.log(i + "*" + j + "=" + i*j); 
    }
}

let myArray = ["flash", "superman", "batman", "spiderman", "ironman"];

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}

//break and continue

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break; // exit the loop
       // continue; // skip the current iteration
    }
    console.log(i);
}

