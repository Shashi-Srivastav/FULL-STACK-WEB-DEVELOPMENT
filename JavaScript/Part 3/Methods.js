//Trim
let msg = "    hi     ";
msg.trim();
console.log(msg.trim()); 
let pass = prompt("enter your password");
console.log(pass.trim());

//toUpperCase & toLowerCase
let name = "shashi";
console.log(name.toUpperCase());
console.log(name.toLowerCase());

//indexOf
let name3 = "shashi";
console.log(name3.indexOf("i"));

//Method Chaining
let name1 = "    shashi    ";
console.log(name1.trim().toUpperCase());

//Slice 
let name2 = "Shashi Srivastava";
console.log(name2.slice(0,7));
console.log(name2.slice(7));
console.log(name2.length);
console.log(name2.slice(-11));

//Replace & Repeat
let message = "ilovecoding ";
console.log(message.replace("i","we"));
console.log(message.replace("o","e"));//first occurance
console.log(message.repeat(3));