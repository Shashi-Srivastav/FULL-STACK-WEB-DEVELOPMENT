const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

//Creating Restful API ------------------/Index rOUTE

const posts = [
    {
        id: "1a",
        username : "xyz",
        content : "asd",
    },
    {
        id:"2b",
        username : "fhfh",
        content : "asdfhgtfbc",
    },
    {
        id:"3c",
        username : "fsvcxvrtb",
        content : "tdht",
    },
    {
        id:"4d",
        username : "fgtrbtrbr",
        content : "jgjty",
    },
    {
        id:"5e",
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
    posts.push({username,content});
    
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


app.set(express.static(path.join(__dirname,"public")));
app.listen(port, ()=>{
    console.log(`Listining on port ${port}`);
});