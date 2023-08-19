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

// function savetoDB(data){
//     return new Promise((success, failure) => {
//         let internetspeed = Math.floor(Math.random() * 10) +1;
//         if(internetspeed > 4){
//             success("Success : Data Saved!");
//         }
//         else{
//             failure("Failure : Data is not saved!");
//         }
//     });
// };

// savetoDB("DATA_PACK 1");

//Then() & Catch() methods ---------------------------------------------------------------------------------------------------
//part of promise
//then() we can use it after accept of promise
//catch() we can use it after failure of promise

// let req = savetoDB("Shashi");
// // console.log(req);
// req.then(()=>{
//     console.log("req accepted");
//     console.log(req);
// })
// .catch(()=>{
//     console.log("req rejected");
// });


//Promise Chaning ----------------------------------------------------------------------------------------------------------------
// savetoDB("DATA_PACK 1")
// .then(()=>{
//     console.log("Data1 Saved");
//     return savetoDB("DATA_PACK 2");
// })
// .then(()=>{
//     console.log("Data2 Saved");
//     return savetoDB("DATA_PACK 3");
// })
// .then(()=>{
//     console.log("Data3 Saved");
// })
// .catch(()=>{
//     console.log("Promise was rejected");
// });

//Result & Error in Promise -----------------------------------------------------------------------------------------------------
// savetoDB("DATA_PACK 1")
// .then((result)=>{
//     console.log("Data1 Saved");
//    console.log("result of promise : ", result);
//    return savetoDB("DATA_PACK 2");
// })
// .then((result)=>{
//     console.log("Data2 Saved");
//     console.log("result of promise : ", result);
//     return savetoDB("DATA_PACK 3");
// })
// .then((result)=>{
//     console.log("Data3 Saved");
//     console.log("result of promise : ", result);
// })
// .catch(()=>{
//     console.log("Promise was rejected");
//     console.log("error of promise : ", error);
// });