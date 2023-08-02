// Map Function----------------------------------------------------------------------------------
// let num = [1,2,3,4,5];

// let double = num.map((i) => {
//     console.log(i*2);
// });
// double(num);

//Filter Function --------------------------------------------------------------------------------
let nums = [1,2,31,3,4,53,23,435,6];
let result = nums.filter((i)=>{
    return i%2 == 0;// return even only with new array
});