const express = require("express");
const app = express();

// console.dir(app);

let port = 3000;

app.listen(port, ()=>{
    // console.log(`app is listening on port ${port}`);
});

// app.use((req, res) =>{
//     // console.log("request recived");
//     // res.send("my first api responce ");
//     // res.send({//sending object
//     //     name: "shashi",
//     //     age: 23,//js object changed to json using express
//     // })
//     let code = "<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>"
//     res.send(code);
// });

//Routing-----------------------------------------------------------------------------------------------------------
// - it is the process of selecting a path for traffic in a network or across multiple network
//we r using app.get()

app.get("/", (req, res) => {
    res.send("You r at home dir !");
});

// app.get("/search", (req, res) => {
//     res.send("You are at search dir");
// })
// app.get("/gta", (req, res) => {
//     res.send("You are at gta dir");
// })

// app.get("*", (req, res) => {//* repre all dir acept above one - if req is to get other dir this will print
//     res.send("This Path Not Exist !");
// })

//Path Parameters -----------------------------------------------------------------------

// app.get("/:username/:id",(req,res)=>{
//     let {username,id} = req.params;//storing req in var
//     res.send(`welcome to @${username} and ${id}`);//printed in cmd
//     console.log(username,id);
// });

//Query String ---------------------------------------------------------------------------------

app.get("/search",(req,res)=>{
    let {q}= req.query;
    let html = `<h1>Search res for : ${q}</h1>`
    res.send(html);
});
