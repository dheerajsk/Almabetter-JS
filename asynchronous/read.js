
const fs = require("fs");


const printData = function(err, data){
    if(!err){
        console.log(data.toString());
    }
}

fs.readFile("data.txt", printData); // TP


// lack of Error handling standard.
// Lack of readability.
// Loss of control. - Major Problem.