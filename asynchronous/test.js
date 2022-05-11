
function runAsync(){
    setTimeout(()=>{console.log("Task 1 is completed");}, 0);
}

function runSync(){
    console.log("Task 2 is completed");
}

runAsync(); // T1
runSync();  // T2

//  | T1 | T2 |  |   => MT => []



// Promise.