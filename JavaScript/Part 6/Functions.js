function number (){
    console.log(332);
}
// number();

function dice (){
    let ans = Math.floor(Math.random()*6)+1;
    console.log(ans);
}
dice();

//Function with argguments ---------------------------------------------------------------------------------------------------------
function teacher(name, age){
    console.log(name,age);
}
teacher("Shashi",23);

function average(a,b,c){
    let avg = (a+b+c)/3;
    console.log(avg);
}
average(3,3,3);

//concatinate array element in string-------------------------------------------------------------------------------------------------
let students = ["shasi","rohit","shubham","ram"];
function concatinate(students){
    let result = "";
    for(let i = 0;i<students.length;i++){
        result = result + students[i];
    }
    return result;
}
concatinate(students);
//shashirohitshubhamram

//Function Expression ---------------------------------------------------------------------------------------------------------------
let sum = function(a,b){//calling fx by variable name;
    return a+b;
}
sum(2,3);
//5

//Hign Order Function----------------------------------------------------------------------------------------------------------- 
function multiplegree (fx, count){
    for(let i = 0;i<count;i++){
        greet();
    }
}
let greet = function(){
    console.log("Hello");
}
multiplegree(greet,10);
//10 x hello

//Hign Order Function(Return)--------------------------------------------------------------------------------------------------------
