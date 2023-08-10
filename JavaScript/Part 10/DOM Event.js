//Inline DOM Event -------------------------------------------------------------------------
// onclick
// <button onclick="console.log('Liked'); console.log('Followed too')">Like Me !</button>

//Onclick Events --------------------------------------------------------------------------------------------
// onmouseenter ---------------------------------------------------------------------------------------------
// let btns = document.querySelector("button");
// for (bbtn of btns) {
//     bbtn.onclick = Clicked;
//     bbtn.onmouseenter = function (){
//         console.log("you entered by mouse ");
//     }
// }
// function Clicked(){
//     alert("liked!");
// }
// btns.onmouseenter = function(){
//     console.log("you hover on btn using mouse on first btn without using loop");
// }

//Event Listners -----------------------------------------------------------------------------------------
let btns = document.querySelectorAll("button");
for (let btn of btns) {
    btn.addEventListener("click",sayHello);
    btn.addEventListener("click",sayName);
}
function sayHello(){
   console.log("hello");
}
function sayName(){
    console.log("Dr.Nebula");
}