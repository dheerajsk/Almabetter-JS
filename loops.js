
const n = 5;
const msg = "I Love JavaScript";

// 1. Initialization => Where Loop begins
// 2. Condition for termination.
// 3. Increament/Decreament.

// for(let i=0; i<n; i++){ // 0,1,2,3,4
//     console.log(msg);
// }

// const numbers = [4,8,1,5,3,2]; // 23 // 6-1=> 5
// const length = numbers.length;
// let sum=0;

// for(let i=0; i<length; i++){
//     sum = sum+numbers[i]; // 0+4 => 4+8 => 12+1=> 13
// }
// console.log(sum);

// for.. of

const numbers = [4,8,1,5,3,2]; // 23 // 6-1=> 5
let sum=0;

for(let item of numbers){
    if(item==5){
        break;
    }
    sum=sum+item;
}

console.log(sum);

// reverse a string.

// let str="I live in Mumbai"; // 5 
// let result='';
// for(let i=str.length-1; i>=0; i--){
//     result=result+str[i]; // i=> ia=> iab=> iabm=> iabmu
// }
// console.log(result);

// for..of => goes from start to end and gives you item in array.
// for..in => go from start to end and get index.

// const numbers = [4,8,1,5,3,2]; // 23 // 6-1=> 5
// let sum=0;

// for(let index in numbers){
//     if(index<5 && index>1){
//         numbers[index]=numbers[index]+1;
//     }
//   sum = sum+numbers[index];
// }
// console.log(sum);

// while.., do.. while.

// const numbers = [4,8,1,5,3,2]; // 23 // 6-1=> 5
// let sum=0;

// let i=0; // before while loop begins.
// while(i<numbers.length){ // condition for termination.
//     sum=sum+numbers[i];
//     i++;
// }
// console.log(sum);
// let i=0;
// for(___;i<numbers.length;){
//     sum=sum+numbers[i];
//     i++;
// }
// console.log(sum);

// do..while.

let i=0;
numbers = [4,8,1,5,3,2];

do{
    console.log(numbers[i]);
    i++;
    if(i==2){
        break;
    }
}while(i<numbers.length);
