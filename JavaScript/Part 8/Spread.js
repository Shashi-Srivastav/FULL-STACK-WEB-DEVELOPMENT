let arr = [1,2,3,4,5,6,7,8,9,10];
Math.min(arr[0],arr[1],arr[2]);
//1
Math.max(arr[0],arr[1],arr[2]);
//3

//Using Spread -------------------------------------------------
Math.min(...arr);//... is syntax of spread and it send single single all values of arr
//1
arr.push(-1);
Math.min(...arr);
//-1

//eg
console.log(..."Shashi");
//S h a s h i