//Array is an Object -------------------
arr= [1,2,3];
arr.push(4);

//Simple Array ------------------------------------------------------------------------------------------------
let students = ["shashi", "aniket","ram"];
let num = [1,2,3,4,56,6];

//Mixed Array
let mixed = ["shashi", 1, "srivastava", 2];
console.log(mixed[0].length);
console.log(mixed[0][2]);

//Empty Array
let empty = [];

//Array Are Mutable
let fruits = ["Apple","Orange","Banana"];
fruits[0] = "Guava";
console.log(fruits[0]);

//Methods in Array -----------------------------------------------------------------------------------------------

//Push
let array = ["shashi","ravi","sonu"];
array.push("ram");

//Pop
// array.pop();

//UnShift - To add element in front
array.unshift("Ram");

//Shift - end
array.shift("Ram");

//Problem Q/A
let months = ["january","march","july","august"];
//Result - ["may","june","july","august"];

months.shift();//Delete element at first index
months.shift();//Delete second element
months.unshift("june");
months.unshift("may");

//indexOf in Array
let colour = ["red","blue","green"];
colour.indexOf("blue");
colour.indexOf("Red");// result = -1 not exist

//includes - also search values it return true as boolien
colour.includes("red");// true
colour.includes("Red");// false

//Concatenation 
let array1 = ["one","two","three"];
let array2 = ["four","five","six"];
//first_array.concat(second_array);
let array3 = array1.concat(array2);
array3// new array

//Reverse
array1.reverse();// it reverse the original array
array1// now revered

//Slice in Array
let Index = ["0","1","2","3","4"];
//array_name.slice(first_index,second_index);
Index.slice();//   it will give new array
Index.slice(2);//  it will give 2,3,4 till end
Index.slice(1,3);//it will give 1,2 as 3 not include
Index.slice(-2)//  it will give 3,4 the last elements

//Spilce
//array_name.splice(start,delete_count,item0...itemN);
let car = ["swift","city","bmw","audi","honda"];
car.splice(4)//   it will act same like slice but work direct on array not on copy and give (honda);
//car - ["swift","city","bmw","audi"]; honda is spliced
car.splice(0,1);//swift is deleted
car.push("hundai");
//car - ["swift","city","bmw","audi","hundai"];
car.splice(2,3);//bmw and audi is deleted
//car - ["swift","city","hundai"];
car.splice(2, 0 , "gta");// element added in middle
//car - ['city', 'bmw', 'gta', 'audi'];
car.splice(1,1,"gwagon");
// car -  ['city', 'gwagon', 'gta']

//Sort
let chr = ["a","d","v","b","c"];
chr.sort();//worked

let marks = [99,89,67,42,100];
// marks - [100, 42, 67, 89, 99];  not worked cause num convert to string 

//Practice Q/A
let months1 = ["january","july","march","august"];
months1.splice(0 ,2, "july","june");// o index se suru kro 2 element delet kro add kro


//Array Referances --------------------------------------------------------------------------------------------------

//"name" == "name"
//true
//"name" === "name"
//true

// [1] == [1]
//false

// [1] === [1]
//false

// [] == []
//false

// [] === []
//false

let arr1 = [1];
let arr2 = [1];
arr1 == arr2 
//false - same value but have diff loc - loc in compaired not value
arr1 === arr2
//false

let arr = [1,2,3,4,5];
let arrCopy = arr;
// arrCopy will get the address of each value from arr and it act same as arr if any changes occur
arrCopy == arr
//true
arrCopy === arr
//true
arr.push(6);
//arr - [1,2,3,4,5,6];
arrCopy.push(7);
// arr - [1,2,3,4,5,6,7];

//Constant in Array -------------------------------------------------------------------------------------------------

const arrx = [1,2,3];
arrx.push(4);
// arr - [1,2,3,4];
arrx.pop();
//arr - [1,2,3];
// arr = [2,3,4]; will not work not diff address can alocate but the value inside can change

//Nested Array ----------------------------------------------------------------------------------------------------------

let nest = [ [1,2], [2,3],[3,4]];
nums[0];//[1,2]
nums[0][0];//1
//nums[row_no][col_no];
