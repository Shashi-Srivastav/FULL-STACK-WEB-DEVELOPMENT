//nameless function
const sum = () => {// here sum is variable as well as function
    console.log(a+b);
};
sum(2,3);
//5

const cube = (n) => {
    return n*n*n;
}
cube(2);
//8

const empty = () => {
    console.log("empty");
}
empty();
//empty

//Emplicit Return --------------------------------------------------------------------------------------------------------------------------
// or Automatic Return

const mul = (a,b) => (
    a*b
);
mul(2,3);
//6
