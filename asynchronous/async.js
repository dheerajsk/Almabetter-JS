
// T1
function callDB(printCB){
    // inbuilt function, delays execution or performs a task after given time.
    setTimeout(()=>{
        console.log("DB Call is done");
        print();
    }, 4000);
}

// T2
const print = function(data){
    console.log(data);
}

const result = callDB(print); 

