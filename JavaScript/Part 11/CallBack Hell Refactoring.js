h1 = document.querySelector("h1");

function changeColour(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10)+1;
            if(num > 3){
                reject(" promise rejected");
            }
           h1.style.color = color;
           console.log(`color changed to ${color}!`);
           resolve("color changed");
        }, delay);
    });
};

// changeColour("red", 1000)
// .then(()=>{
//     console.log("red color was completed");
//     return changeColour("orange", 1000);
// })
// .then(()=>{
//     console.log("orange color was completed");
//     return changeColour("green",1000);
// })
// .then(()=>{
//     console.log("green color was completed");
//     return changeColour("blue", 1000);
// })
// .then(()=>{
//     console.log("blue color was completed");
// });

// changeColour("red", 1000,()=>{
//     changeColour("purple", 1000,()=>{
//         changeColour("green", 1000, ()=>{
//             changeColour("pink", 1000, ()=>{
//                 changeColour("red", 1000);
//             });
//         });
//     });
// });

//Using async & await Part 12 ----------------------------------
// async function demo(){
//     await changeColour("red", 1000);
//     await changeColour("green", 1000);
//     await changeColour("blue", 1000);
//     await changeColour("purple", 1000);
//     await changeColour("orange", 1000);
//     changeColour("pink", 1000);
// };

//Rejaction Handling using await -----------------------------------
//try() & catch()-------
async function demo(){
    try{
    await changeColour("red", 1000);
    await changeColour("green", 1000);
    await changeColour("blue", 1000);
    await changeColour("purple", 1000);
    await changeColour("orange", 1000);
    changeColour("pink", 1000);
    }
    catch(err){
        console.log("error caught ");
        console.log(err);
    }
};
