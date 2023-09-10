// const stu1 = {
    //object
//     name: "shashi",
//     age: 33,
    //if we defining fx in object -- multi times 
//     getMarks: function (){
//         return this.marks;
//     },
// }
// const stu2 = {
    //object
//     name: "shashi",
//     age: 33,
    //if we defining fx in object -- multi times 
//     getMarks: function (){
//         return this.marks;
//     },
// }
// const stu3 = {
    //object
//     name: "shashi",
//     age: 33,
    //if we defining fx in object -- multi times 
//     getMarks: function (){
//         return this.marks;
//     },
// }
// const stu4 = {
    //object
//     name: "shashi",
//     age: 33,
    //if we defining fx in object -- multi times 
//     getMarks: function (){
//         return this.marks;
//     },
// }

// getMarks: function (){
//     return this.marks;
// }, this well consume more memory  - so we use template / OOPS

//OOPS - Object Oriented PROGRAMMING
//Object Prototype - stores functions like push, pop
//eg - let arr[] = {2,3,4,3};
//arr inherit function/features from parient
//arr.__proto__ 

//arr.__proto__.push = (n) => { console.log("Pushing number :", n)}; 
//above is just refrence not actual 
//eg - arr - there will no fx like (n) => {....};

//Actual Object
// Array.prototype - we will get push, pop
//et arr1 = {}
//arr2 = {}

//arr1 === arr2 // false - it will not same cause both take diff memory nd location
//altho same fx in in same ket val pair

//eg - "shashi".ToUpperCase === "xrer".ToUpperCase // true - its part of prototype thats why same refrence to memory

//Factory Function--------------------------------------------------------------------

// function PersonMaker(name,age){
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hi i am ${this.name}`);
//         },
//     };
//     return person;
// }
//in browser console

// let p1 = PersonMaker("shashi",23);//p2, p3, p4, p5----
// p1.talk();
//Hi my name is shashi//

// let p2 = PersonMaker("shashi",23);//copy
// let p3 = PersonMaker("shashi",23);//copy

// p2.talk === p3.talk//false //copy


//New Operator ----------------------------------------------------------------------
//new operator lets dev create an instance of a user - defined object or of one of the build - in object type that has a constructor function

//Constructor - doesnt return anything start with capital - the constructor method is a special method of a class for creating and init an object instance of the class.
// function Person(name,age){
//     this.name = name;
//     this.age = age;
//     console.log(this);//will print window but after prototype will print talk
// }//blueprint - design
//new keyword
// Person.prototype.talk = function(){
//     console.log(`Hi my name is ${this.name}`);
// }
// let p4 = new Person("name",23);//refer to same copy
// let p5 = new Person("sdds",23);//refer to same copy

//Classes-----------------------------------------------------------------------------

// class Person {
//     constructor(name, age){
//         this.name = name;
//         tjis.age = age;
//     }

//     talk(){
//         console.log(`Hi i am ${this.name}`);
//     }
// }
// let p4 = new Person("name",23);
// let p5 = new Person("sdds",23);

// p4.tlak === p5.talk // true 

//Inheritance ---------------------------------------------------------------------------
//created
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi i am ${this.name}`);
    }
}
class Student extends Person{
    constructor(name,age,marks){
        // this.name = name;
        // this.age = age; we can remove to save memory
        this.marks = marks;
    }
    // talk(){
    //     console.log(`Hi i am ${this.name}`);
    // }
}

let stu1 = new Student ("xyz",32,93);

class Teacher extends Person{
    constructor(name,age,subject){
        // this.name = name;
        // this.age = age;
        this.subject;
    }    
    // talk(){
    //     console.log(`Hi i am ${this.name}`);
    // }
}

//@ stud and teach me this.name , age, talk fx are common there fore--Inheritance
//to inherit use child class name then parient class na e with - extends