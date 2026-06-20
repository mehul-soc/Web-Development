// const student1 = {
//     name: "Mehul",
//     Semester: "4th",
//     program: "BCA",
//     age: "20",
//     greet: function () {
//         console.log("Hello this side", this.name, this.program, this);
//     }
// }
// console.log(student1.greet());
// student1.Semester = "5th";
// console.log(student1);
// student1.city = "Indore";
// console.log(student1);





const student2 = {
    name: "Kanika",
    Semester: "passout",
    program: "MBA",
    age: "23",
    greet: function () {
        console.log("Hello this side", this.name, this.program, this);
    }
}

const student1 = {
    name: "Mehul",
    Semester: "4th",
    program: "BCA",
    age: "20",
    greet: function () {
        console.log("Hello this side", this.name, this.program, this);
    }
}

console.log(student2.greet())


const student = {
    name: "Mehul",
    age: "20",
    Collage: "SUI",
    branch: "BCA"
}

student.marks = "500/500"
student.semester = "4th"
student.greet = function () {
    console.log("hello this side ", this.name, "and my marks are", this.marks)
}
console.log(student.greet());
console.log(student);