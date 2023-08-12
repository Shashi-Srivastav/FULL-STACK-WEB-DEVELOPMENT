let h2 = document.querySelector("h2");

let gameSeq=[];
let userSeq=[];
let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

document.addEventListener("click", function(){
    if(started == false){
        console.log("game stated");
        started = true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;

    let randIndx = Math.floor(Math.random() * 3);
    let randCol = btns[randIndx];
    let randBtn = document.querySelector(`.${randCol}`);
    gameSeq.push(randCol);
    btnFlash(randBtn);
}

function btnPress(){
    let btn = this;
    btnFlash(btn);
    user
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}