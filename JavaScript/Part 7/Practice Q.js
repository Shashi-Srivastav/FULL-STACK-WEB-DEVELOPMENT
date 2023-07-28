//q1 make an arrow fx 
const square = (n) => {
return n*n;
};
console.log(square(3));

//q2 write a fx that print hi 5 time every 2 sec
let id = setInterval(() => {
    console.log("Hi");
}, 2000);

setTimeout(()=>{
    clearInterval(id);
    console.log("clear");
},10000);