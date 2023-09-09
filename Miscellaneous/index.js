const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended : true}));//using middleware - express wil read all data if it is in url - undefined
//to fix undefined we use
app.use(express.json());
//it allow all req - get / post 

app.get("/register", (req,res)=>{
    //from get we can get user data as it send through url
    //deconstructiong
    let {user, password} = req.query;//query - form data is in the query
    //we accessed user input and sended responce dependent to use input
    res.send(`standert Get Responce. Welcome ${user}`);
});

//handling post request
app.post("/register", (req,res)=>{
    console.log(req.body);//express in not able to read it we have to pass it as readable form
    res.send("standert Post Responce");
    //using user input data in post 
    let { user, password } = req.body;
    //nodemon index.js
    // { Name: 'dadad', Password: 'dadda' } - output in terminal as key : val pair
    //this res is not visible to url but visible on backend
    res.send(`standert Get Responce. Welcome ${user}`);
});

app.listen(port, ()=>{
    console.log(`Listning on port ${port}`);
});