//Async Function -
//async & await Keyword

// async function greet(){
    // throw "404 page not found"
    //async always return promise
    // return "Hi";
// }

// greet()
// .then((result)=>{
//     console.log("promise was resolved");
//     console.log("result was : ", result);
// })
// .catch((err)=>{
//     console.log("promise was rejected with err");
// });


// let hello = async () => {
//     return 5;
// };//return as promise


//Await Keyword -------------------------------------------------------------------------------
//use only if fx is async
 function getNum(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let num = Math.floor(Math.random() *10)+1;
            console.log(num);
            resolve();
        }, 1000);
    });
 };

async function demo(){
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    getNum();
}