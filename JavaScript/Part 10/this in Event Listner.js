let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");

// btn.addEventListener("click", function(){
//     // console.log(this);
//     // console.dir(this); return as object
//     console.dir(this.innerText);
//     this.style.backgroundColor = "red";
// });

// h1.addEventListener("click", function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "red";
// });

// h3.addEventListener("click", function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "red";
// });

// p.addEventListener("click", function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "red";
// });

// Not the efficient way 

function changeColour (){
    console.dir(this.innerText);
    this.style.backgroundColor = "red";
};

btn.addEventListener("click", changeColour);
h1.addEventListener("click", changeColour);
h3.addEventListener("click", changeColour);
p.addEventListener("click", changeColour);