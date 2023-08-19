let url = "https:/catfact.ninja/fact";
fetch(url)
.then((succ)=>{
    // console.log(succ);
    //succ.json also return object thats why we used then again
    return succ.json();
})
.then((data)=>{
    console.log("First Data : ",data.fact);
    return fetch(url);
})
.then((succ2)=>{
    return succ2.json();
})
.then((data2)=>{
    console.log("Second Data : ",data2.fact);
})
.catch((err)=>{
    console.log("Error - ", err);
});