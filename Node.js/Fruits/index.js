//special filethat aquire data of folder which is ready to send data -- it collect data and combine it togeather

const apple = require("./Apple");
const banana = require("./Banana");
const orange = require("./Orange");


let fruits = [apple,banana,orange];

module.exports = fruits;