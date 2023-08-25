// //Process
// process
// process.version
// process.cwd()
// process.argv

//console.log(process.argv);// run from cmd - node script.js
//node script.js shashi hi ks ks ei is -- stored argument in array
// let arr = process.argv;
// for (let index = 2; index < arr.length; index++) {
//     console.log("Hi : ", arr[index]);
// }


//Module.Export --------------------------------------------------------------------------
const someValue = require("./math")
console.log(someValue);