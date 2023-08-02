//check if all element of arr is multiple of 10 ?
let num = [10,20,30,40,50,60,70,80,99,100];
let ans = num.every((i)=>i%10==0);
console.log(ans);
//false

//Q2 Find min no in arr
let min = num.reduce((carry,i)=>{
    if(carry<i){
        return carry;
    }
    else{
        return i;
    }
});
console.log(min);