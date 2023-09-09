const stu1 = {
    //object
    name: "shashi",
    age: 33,
    //if we defining fx in object -- multi times 
    getMarks: function (){
        return this.marks;
    },
}
const stu2 = {
    //object
    name: "shashi",
    age: 33,
    //if we defining fx in object -- multi times 
    getMarks: function (){
        return this.marks;
    },
}
const stu3 = {
    //object
    name: "shashi",
    age: 33,
    //if we defining fx in object -- multi times 
    getMarks: function (){
        return this.marks;
    },
}
const stu4 = {
    //object
    name: "shashi",
    age: 33,
    //if we defining fx in object -- multi times 
    getMarks: function (){
        return this.marks;
    },
}

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

