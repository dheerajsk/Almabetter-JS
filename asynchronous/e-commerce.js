
const cardVerification = require("../asynchronous/card-verification");

// Placing order and deducting amount for order.

function getCardDetails(){
    // read card from inputs.
    console.log("Card Received");
    const card = "9988 7766 6655 5544";
    cardVerification.verify(card, dedcutMoney);
}

function dedcutMoney(card, amount){
    console.log("Amount deducted");
    // call your bacnk and deduct money.
}

getCardDetails();