// function savetoDB(data, success, failure) {
//     let netspeed = Math.floor(Math.random() * 10) + 1;
//     if (netspeed > 4) {
//         success();
//     }
//     else {
//         failure();
//     }
// };

// savetoDB("DATA_PACK",
//     () => {
//         console.log("Success : Data is Saved !");//again call back
//         savetoDB("DATA_PACK 2",
//             () => {
//                 console.log("Success 2 : Data is Saved !");
//                 savetoDB("DATA_PACK 3", 
//                 ()=>{
//                     console.log("Success 3 : Data is Saved !");
//                 },()=>{
//                     console.log("Failure 3 : Data is not saved !");
//                 })
//             },
//             () => {
//                 console.log("Failure 2 : Data is not saved !");
//             })
//     },
//     () => {
//         console.log("Failure : Data is not saved !");
//     });


//REFACTORING WITH PROMISES ----------------------------------------------------------------------------------------------------

//Promise - its a Object, containe resolve & reject

function savetoDB(data){
    return new Promise((success, failure) => {
        let internetspeed = Math.floor(Math.random() * 10) +1;
        if(internetspeed > 4){
            success("Success : Data Saved!");
        }
        else{
            failure("Failure : Data is not saved!");
        }
    });
};

savetoDB("DATA_PACK 1");