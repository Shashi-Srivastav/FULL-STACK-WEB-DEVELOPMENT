const express = require("express");
const app = express();

console.dir(app);

let port = 3000;

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});

app.use((req, res) =>{
    // console.log("request recived");
    // res.send("my first api responce ");
    // res.send({//sending object
    //     name: "shashi",
    //     age: 23,//js object changed to json using express
    // })
    let code = "<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>"
    res.send(code);
});