// 1
function greet(name){
    console.log("Hello", name)
}
greet("Mehul")

// 2
function totalamount(amount, quantity){
    return amount*quantity
}
console.log(totalamount(500,3))


// 3
function deliveryfee(amount, quantity, delivery=40){
    return amount*quantity + delivery
}
console.log(deliveryfee(500, 4))

// 4
function vote(age){
    if (age>=18){
        console.log("person can vote")

    } else{
        console.log("Person can't vote")
    }
}
console.log(vote(20))

// 5
const discount = function(item){
    if (item >10000){
        console.log(item *10/100, "is available")
    }else if (item >100000){
        console.log(item *20/100, "is available")
    }else{
        console.log("no discount available")
    }
}
console.log(discount(50000))

// 6
const conversion = (rupee)=>{
    return rupee/90
}
console.log(conversion(10000))

// 7
const student = {
    name: "Mehul",
    age: "20",
    class: "BCA",
    city: "Indore",
    value: function(){
        console.log("Name", this.name,"age",  this.age)
    }
}
console.log(student.value())

// 8
student.city = "Delhi"
student.age = "21"
console.log(student)

// 9
const customer = {
    
}

// 10
const user1 = {
    name: "Mehul",
    Job: "SOC",
    email: "abc@gmail.com",
    age: "25",
    greet: function () {
        console.log("Hello", "here is my email", this.email);
    }
}

console.log(user1.greet())

// 11
const product1 = {
    name: "Laptop",
    price: "50000",
    warranty: "2 year"
}
const product2 = {
    name: "Macbook",
    price: "500000",
    warranty: "5 year"
}
const product3 = {
    name: "Mobile",
    price: "20000",
    warranty: "1year"
}
const product4 = {
    name: "Tablet",
    price: "70000",
    warranty: "2 year"
}

console.log(product1, product2, product3, product4)

