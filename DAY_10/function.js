const greet= function(){
    console.log("Hello What's Up")
}
console.log(greet());

function greet_name(name){
    console.log("Hello What's Up", name)
}
greet_name("Mehul");

function greet_course(name, course){
    console.log("Hello What's Up", name, course)
}
greet_course("Mehul", "BCA");

function student (BCA, Btech, MCA){
    return BCA+MCA+Btech
}
console.log(student(333, 354, 456))