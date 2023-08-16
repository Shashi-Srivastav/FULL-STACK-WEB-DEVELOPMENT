h1 = document.querySelector("h1");
// setTimeout(() => {
//     h1.style.color = "red";
// }, 1000);

// setTimeout(() => {
//     h1.style.color = "orange";
// }, 2000);

// setTimeout(() => {
//     h1.style.color = "purple";
// }, 3000);

//better way ------------------------------------

// function changeColour(colour, timeout){
//     setTimeout((color) => {
//         h1.style.color = colour;
//     }, timeout);
// }

// changeColour("red", 1000);
// changeColour("orange", 2000);
// changeColour("pink", 3000);
// changeColour("blue", 4000);

// way better way --------------------------------

function changeColour(colour, timeout, changenextcolour){
    setTimeout((color) => {
        h1.style.color = colour;
        changenextcolour;
    }, timeout);
};

changeColour("red", 1000,()=>{
    changeColour("purple", 1000,()=>{
        changeColour("green", 1000, ()=>{
            changeColour("pink", 1000, ()=>{
                changeColour("red", 1000);
            });
        });
    });
});