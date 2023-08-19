//JSON.parse(data) Method - to parse a string data in a JS object
//JSON.stringify(json) Method - to parse a JS object data into JSON

let jsonData = '{"fact":"A cat can jump up to five times its own height in a single bound.","length":65}'//just a string not object
//data stored in string format
//to extract data from string we use - JSON.parse(data) Method - it convert string data into JS Object

// console.log(jsonData);//output - just a string

let validData = JSON.parse(jsonData);
console.log(validData);
console.log(validData.fact);

let student = {
    name: "shasi",
    age: 23,
};
JSON.stringify(student);