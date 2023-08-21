const url = "https://icanhazdadjoke.com/";

async function getJokes(){
    try{
    const conf = {headers : {Accept :"application/json"}};//headers
    let res = await axios.get(url, conf);
    console.log(res.data);
    }
    catch(err){
        console.log("Error!");
    }
}