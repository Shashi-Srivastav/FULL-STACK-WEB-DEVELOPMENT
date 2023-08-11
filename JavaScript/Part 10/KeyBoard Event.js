let btn = document.querySelector("button");
// btn.addEventListener("click", function(event){
//     console.log(event);//default argument returned as object
//     console.log("button clicked");
// });
// btn.addEventListener("dblclick", function(event){
//     console.log(event);//default argument returned as object
//     console.log("button clicked");
// });

//Keyboard Inputs -----------------------------------------
let input = document.querySelector("input");
input.addEventListener("keydown", function(event){
    console.log(event);
    console.log("key = ",event.key);
    console.log("code = ",event.code);
    console.log("key was pressed!");
});
// input.addEventListener("keyup", function(){
//     console.log("key was released!");
// });