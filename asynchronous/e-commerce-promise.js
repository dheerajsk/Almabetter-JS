
const cardVerification = require("./card-verification");

// Placing order and deducting amount for order.

async function getCardDetails (){
    // read card from inputs.
    console.log("Card Received");
    const card = "";
    // const promise = cardVerification.verify(card);
    // console.log(promise);
    // 1. using then function.
    // promise.then(
    //     // execute when promise is resolved.
    //     (result)=>{
    //         console.log(result);
    //         dedcutMoney();
    //     },
    //     // // execute when promise is rejected.
    //     // can only handle errors from body of promise.
    //     (err)=>{
    //         console.log("error block");
    //         console.log(err);
    //     }
    //     // can handle error from body of promise as well as after 
    //     // resolution if there are any error.
    // ).catch(err=>{
    //     console.log("error in catch");
    //     console.log(err);});

    // 2. using async/await.
    try{
        const result = await cardVerification.verify(card);
        console.log(result);
        dedcutMoney();
    }catch(err){
        console.log("err block");
        console.log(err);
    }
}

function dedcutMoney(card, amount){
    // throw new Error("Unhandled error");
    console.log("Amount deducted");
    // call your bacnk and deduct money.
}

getCardDetails();

// 1. How to create a promise => new Promise((resolve, reject)=>{//..});
// 2. How to listen to a promise => then().catch();
// 3. Is there better way to listen => async, await.
// 4. How to handle error from promise=> 
    // 4.1 if using then=> use err or catch block.
    // 4.2 is using async await=> use try, catch block.