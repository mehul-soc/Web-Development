// higher order function or Callback Function
function greet() {
    console.log("Hello World")
}

function processUser(Callback, name) {
    Callback();
}
processUser(greet, "Mehul")
console.log(processUser(greet, "Mehul"))

function PaymentSuccess() {
    console.log("Payment Successfull!!")
}
function PaymentProcessing(amt, payment) {
    console.log(amt, "Deducted from your a/c")
    payment();

}
PaymentProcessing(12000, PaymentSuccess);


