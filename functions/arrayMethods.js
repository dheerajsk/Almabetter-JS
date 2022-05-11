

// Arrow Functions.
// 1. JavaScript is based on Functions
// 2. Functions are basic building blocks in JS.
// 3. Asynchrnous Programming.-Callbacks, Promises.

const names=["Anmol", "Anurag", "Aditya", "Nirmal", "Rozeen", "Zeeshan", "Bilash", "Somya"];
// clear

// const filterParam = function(item){
//     return item.startsWith("A");
// }
// clear

// Function as paramater
// const result = names.filter((item) => {return item.startsWith("A")});
const result = names.filter(item => item.startsWith("A"));

console.log(result);


// Syntax of arrow function
// (<param1>, <param2>) => {<statement1>; return <statement2> }
// <param> => <statement1>