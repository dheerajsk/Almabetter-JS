const num1= 65; 
const num2= 65; 

// 1. Equal To operator -> Check if values are equal.
// console.log(num1==num2) // true

// // 2. Not Equal To operator -> checks if values are not same.
// console.log(num1!=num2) // true

// // 3. Strict Equal to.
// console.log(num1===num2); // true

// const num3=90;
// const num4="90";
// console.log(num3==num4); // true [Values are same]
// console.log(typeof num3); // number
// console.log(typeof num4); // string

// console.log(num3===num4); //false [Values are same, but not types]

// console.log(num3!==num4); // true [values are same, nut not type.]

// const num5 = 70;
// const num6 = 80;

// console.log(num5<num6); // 70 is less than 80.
// console.log(num6>num5); // 80 is greater than 70.

// const num7=50;
// const num8 = 40;

// console.log(num8<=num7); //Less than Equal To
// console.log(num8>=num7); // Greater than Equal to.


// Logical Operators.

// const num9=90;
// const num10=100;

// const exp1 = num9<num10; // true
// const exp2 = num10<50 // false;

// console.log(exp1 && exp2); // false [returns true only if both exp returns true]
// // LoginID & password both needs to match

// console.log(exp1 || exp2); // true [returns true even if only one exp returns true]
// // MCQ.

// console.log(!exp2); // false [Inverts result.]

// If else statement.

// const loginID="dheerajkumar";
// const password="Password1";

// if(loginID in Session){
//     // Allowing user into application.
//     // return Response;
//     console.log("Welcome to App");
// }
// else if(loginID=="dheerajkumar" && password=="Password1@"){
//     console.log("Welcome to App");
// }
// else{
//     console.log("Invalid username or password");
// }

// let x=10;
// console.log(x=0);
// if(x=5) // [ false, undefined, 0 ]
// {
//     console.log("hello");
// }

// function add(num1, num2){
//     return num1+num2;
// }

const minMarks=60;
// Fail[39], Pass[40], First Class[60], Distinction[65].

switch(minMarks){
    case 65:
        console.log("Distinction");
        break;
    case 60:{
        console.log("First Class");
        giveMarks()
        break;
    }
    case 40:
        console.log("Pass");
        break;
    default:
        console.log("Fail")
}