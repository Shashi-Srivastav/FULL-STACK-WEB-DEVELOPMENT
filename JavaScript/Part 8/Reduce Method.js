let num = [1,23,3,4];
// let result = num.reduce((carry,i)=>(carry+i));
// console.log(result);
//10

//Q Find max in array
let max = num.reduce((max,i)=>{
    if(max<i){
        return i;
    }else{
        return max;
    }
});
console.log(max);