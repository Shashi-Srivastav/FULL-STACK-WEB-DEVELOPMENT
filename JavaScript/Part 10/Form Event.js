let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();//its a method
    // alert("submitted");//after clicking alter ok we redirect to /action to stop this we use event.preventDefault
});


//Extracting Form Data ------------------------------------------------------------------------------------------------
//  form.addEventListener("submit", function(event){
//     event.preventDefault();
//     let inp = document.querySelector("input");
//     console.dir(inp);
//     // console.log(inp.innerText); will not work 
//     console.log(inp.value);
// });

//  form.addEventListener("submit", function(event){
//     event.preventDefault();
//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");
//     console.log(user.value);
//     console.log(pass.value);
//     alert(` Hi ${user.value} is user name and password is ${pass.value}`);
// });

//access elements using this inside form

// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     console.dir(form);
//     let user = this.elements[0];
//     let pass = this.elements[1];
//     console.log(user.value);
//     console.log(pass.value);
//     alert(` Hi ${user.value} is user name and password is ${pass.value}`);
// });


//More Events ----------------------------------------------------------------------------------------------------------
//Change Event - track changes in input values
//input event - fire when any small change happens 


let user = document.querySelector("#user");
user.addEventListener("change", function(){
    console.log("change event ");
    console.log("new value = ", user.value);
});

user.addEventListener("input", function(){
    console.log("input event");
    console.log("new value = ", user.value);
})