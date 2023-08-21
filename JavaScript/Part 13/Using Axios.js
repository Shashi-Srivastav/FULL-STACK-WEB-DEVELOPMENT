let url = "https://catfact.ninja/fact";
let url2 ="https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("button");
let p = document.querySelector("#result");

// btn.addEventListener("click", async()=>{
//     let fact = await getFact();
//     console.log(fact);
//     p.innerText = fact;
// })

// async function getFact(){
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     }
//     catch(err){
//         console.log("error - ", err);
//         return "No fact found!";
//     }
// };

//DOG IMG API --------------------------------------------------------------------
btn.addEventListener("click", async()=>{
    let link = await getImg();
    // console.log(link);
    let img = document.querySelector("#result");
    img.setAttribute("src", link);
    console.log(link);
})

async function getImg(){
    try{
        let res = await axios.get(url2);
        return res.data.message;
    }
    catch(err){
        console.log("error - ", err);
        return "No IMG found!";
    }
};