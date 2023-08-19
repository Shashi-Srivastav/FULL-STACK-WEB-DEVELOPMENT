let url = "https://catfact.ninja/fact";
let btn = document.querySelector("button");
let p = document.querySelector("#result");

btn.addEventListener("click", async()=>{
    let fact = await getFact();
    console.log(fact);
    p.innerText = fact;
})

async function getFact(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }
    catch(err){
        console.log("error - ", err);
        return "No fact found!";
    }
};