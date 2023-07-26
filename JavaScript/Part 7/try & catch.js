//let a = 5; //this will not throw error cause try will work fine
try{//if try has error then it run catch statement
    console.log(a);// doubt code thay may not run efficiently
}
catch(error){// we can use catch as function (error) and also prit it
    console.log("caught an error a is not defined");
    console.log(error);
}