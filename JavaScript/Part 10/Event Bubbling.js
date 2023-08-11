// when elements are in nested form if eventlistner triggerd to child it also include parent / its also triggerd parent
// to stop event bubbling use stopPropogation


let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", function(){
    console.log("div clicked");
});

ul.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("ul clicked");
});
for(li of lis){
    li.addEventListener("click", function(event){
        event.stopPropagation();
        console.log("li clicked");
    });
}
