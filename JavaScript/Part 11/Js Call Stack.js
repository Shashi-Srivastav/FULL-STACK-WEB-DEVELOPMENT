// function hello(){
//     console.log("inside hello fx");
//     console.log("hello");
// }

// function demo(){
//     console.log("calling hello fx");
//     hello();
// }

// console.log("calling demo fx");
// demo();
// console.log("done, by");


//Visualizing the Call Stack -------------------------------------------------------------

function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    let ans = two() + one();
    console.log(ans);
}

three();