

function doHomeWork(cb, cb2){
    setTimeout(()=>{
        console.log("Homework completed");
        cb(cb2);
    }, 5000);   
}

function submitingHomework(cb){
    setTimeout(()=>{
        console.log("Submitted");
        cb();
    }, 2000);
}

function reviewHomework(){

}

function giveMarks(){

}

function releaseCertificate(){

}

doHomeWork(submitingHomework, reviewHomework);
