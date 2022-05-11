// Find odd numbers.

// function <nameOfFunction>() { }

var num2=10;

// Declaration/Definition/Creation of function.
// Best Pratices.
// 1. Camelcase for name in JS.
// 2. Body of function should be more than 10-15 lines.
// 3. Function should always perform 1 responsibility (SRP).
// 4. Name of a function should be imperative/verb/action
// "Any fool can write code which computers understand but only a good developer
// write code which human can understand"

function findIfOdd(num){
    // Body of Function.
    if(num%2!=0){
        console.log("This is an odd number");
        return true; // here function terminates.
    }
    console.log("This is an even number");
    return false;
}

// Calling/Invoking/Executing a function.
// <nameOfFunction>(<params>)
const result = findIfOdd(57);
console.log(result);
// findIfOdd(58);