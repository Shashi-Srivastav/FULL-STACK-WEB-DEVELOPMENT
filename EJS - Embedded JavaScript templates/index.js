let express = require("express");
let path = require("path");//requiring path

let app = express();

let port = 8080;

app.set("views", path.join(__dirname,"/views"));//setting custom path
app.set("view engine", "ejs");

// app.get("/",(req,res)=>{
    // res.send("this is home");
    //ejs use render to send
   // res.render("home.ejs");//it will auto look for view folder if we run nodemon index.js from anywhere this will thow error
    //to fix this we use manul path set - we have to require path
// });

// Passing Data to EJS 
// app.get("/roleDice",(req, res)=>{
//     res.render("roleDice.ejs");
// });

//Instagram EJS -------------------------------
// app.get("/ig/:username",(req,res)=>{
//     let {username} = req.params;
//     res.render("instagramEJS.ejs",{username});
// });

//Conditional Statement -------------------------
// app.get("/roleDice",(req, res)=>{
//     let diceVal = Math.floor(Math.random() * 6) +1//assumed this data is from database
//     res.render("roleDice.ejs", {num : diceVal});
// });

//loops in ejs ----------------------------------
// app.get("/ig/:username",(req,res)=>{
//     let {username} = req.params;
//     const followers = ["shashi","rahul","sonu","monu"];
//     res.render("instagramEJS.ejs",{username,followers});
// });

//fetching database data and render it
app.get("/ig/:username",(req,res)=>{
    let{ username }= req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    
    if(data){
        res.render("instagramEJS2.ejs",{data});//{data} send as object
    }
    else{
        res.render("error.ejs");
    }
});

//serving static files -----------------------------------------------
// app.use(express.static(path.join(__dirname,"public")));
app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
//serving two dir



app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});