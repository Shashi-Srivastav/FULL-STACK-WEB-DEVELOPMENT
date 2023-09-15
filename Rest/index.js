const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

//Creating Restful API ------------------/Index rOUTE

const posts = [
    {
        id: uuidv4(),
        username : "xyz",
        content : "asd",
    },
    {
        id:uuidv4(),
        username : "fhfh",
        content : "asdfhgtfbc",
    },
    {
        id:uuidv4(),
        username : "fsvcxvrtb",
        content : "tdht",
    },
    {
        id:uuidv4(),
        username : "fgtrbtrbr",
        content : "jgjty",
    },
    {
        id:uuidv4(),
        username : "xczczc",
        content : "asdasd",
    },
];
//creating api 
//GET /post - post is noun - way to implement to rest
app.get("/posts",(req,res)=>{
    // res.send("service running!");
    res.render("index.ejs",{posts});
});

//Post / post ---------
//creating route
//2 routes
//serve the form get /posts/new
//add the new post post /posts
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
    //destructuring
    let {username,content }= req.body;
    //after uuid
    let id = uuidv4();
    posts.push({id,username,content});
    
//redirect - express feature to connect two diff pages
//res.redirect(url);
    res.redirect("/posts");
});

//show route -------------------------------------------------------------------
//id added : unique id
app.get("/post/:id",(req,res)=>{
    let {id} = req.params;
    let post = post.find((p) => id === p.id);
    console.log(post);
    res.render("show.ejs",{post});
});

//UUID ----------------------------

app.set(express.static(path.join(__dirname,"public")));
app.listen(port, ()=>{
    console.log(`Listining on port ${port}`);
});


//error