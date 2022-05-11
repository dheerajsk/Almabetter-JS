

module.exports.verify = (card)=>{
    // 1. Creating a promise
    const promise = new Promise((resolve, reject)=>{
        if(!card){
            reject("Card is empty");
        }
        setTimeout(()=>{
           // call bank database.
        //    reject();
            resolve(true);
        }, 4000);
    });
    return promise;
}