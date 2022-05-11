
// Expression Function.

var reverseString = function(str){
    let result="";
    for(let i=str.length-1; i>=0; i--){
        result=result+str[i];
    }
    console.log(result);
}

console.log(typeof reverseString);

// string, bool, number, object, function

reverseString("Ashish");

var str="Pranjal";
str();