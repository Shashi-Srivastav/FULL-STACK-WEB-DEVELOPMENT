//forEach -------------------------------------------------------------------------------------------------------------------------
let arr = [1,2,3,4,5];
// let print = function(el){
//     console.log(el);
// };
// arr.forEach(print);

arr.forEach(function(i){
    console.log(i);
});

//using arrow fx
arr.forEach((i) => {
    console.log(i);
});

//making object 
let students = [{
    name: "shashi",
    age: 34,
},
{
    name: "kumar",
    age: 23,
},
{
    name: "sahil",
    age: 23,
}];
students.forEach((i) =>{
    console.log(i.name);
});