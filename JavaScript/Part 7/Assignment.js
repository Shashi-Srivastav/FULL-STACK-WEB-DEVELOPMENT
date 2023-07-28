//q1 arrow fx names as arrayAverage that accept array of no and return avg -------------------------------------------
let arr =[1,2,3,4,5,6];
const arrayAverage = ((arr)=>{
    let total = 0;
    for(let i of arr){
        total = total+i;
    };
    return total/arr.length;
});
console.log(arrayAverage(arr));

//q2 find evern or odd using arrow fx----------------------------------------------------------------------------------
const isEven = ((n)=>{
    if(n%2 == 0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
});
isEven(23);

