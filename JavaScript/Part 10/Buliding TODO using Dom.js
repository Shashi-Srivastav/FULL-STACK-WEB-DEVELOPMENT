let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.querySelector("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);

    ul.appendChild(item);
    inp.value = "";
});

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//         console.log("deleted");
//     });
// };

//Event Delegation ---------------------------------------------------------------------------------------------

ul.addEventListener("click", function(event){
    // console.log(event.target.nodeName = "BUTTON");
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        // console.log(listItem);
        listItem.remove();
        console.log("deleted");
    }
    // else{
    //     console.log("don't delete");
    // }
    // console.log("button clicked");
});