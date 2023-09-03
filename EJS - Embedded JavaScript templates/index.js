let express = require("express");
let path = require("path");//requiring path

let app = express();

let port = 8080;

app.set("views", path.join(__dirname,"/views"));//setting custom path
app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    // res.send("this is home");
    //ejs use render to send
    res.render("home.ejs");//it will auto look for view folder if we run nodemon index.js from anywhere this will thow error
    //to fix this we use manul path set - we have to require path
});

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});