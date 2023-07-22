//Object Literal Intro ------------------------------------------------------------------------------------------------------------

const students = {
    name: "shashi",
    age: 23,
    marks: 72.5
};
const shoppinf = {
    name: "Puma",
    discount: 40,
    items: ["shoes","pant"]
};

const post = {
    account: "@shashi",
    content: "this is caption",
    likes: 45,
    repost: ["@shashi","@rohit","@subham"]
}

//To print 
//Object["key"]
//Object.key

post["account"];
post.likes;

//Conversion in Get Values -- Js convert keywords to key ------------------------------------------------------------------------------

const test ={
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
}
// true, null, undefined - keywords converted to string
test[1]//1 is string
//a
test[2]//2 is also string
// b
test[null]//null is also string


//Adding & Updating --------------------------------------------------------------------------------------------------------------------

const students1 = {
    name: "shashi",
    age: 23,
    marks: 72,
    city: "Delhi"
};
// students1.city - Delhi
students1.city = "Mumbai";//update
students1.gender = "male";
students1.subject = ["math","chem","phy"];
delete students1.marks;//to delete
//true - deleted

//Nesting in Object ---------------------------------------------------------------------------------------------------------------------
const teacher = {
    Aman: {
        age :34,
        gender: "Male"
    },
    Akhil: {
        age: 45,
        gender: "Male"
    },
    shashi: {
        age: 23,
        gender: "Male"
    }
}
teacher.Aman.age;
//34

//Array of Objects -----------------------------------------------------------------------------------------------------------------------
const arr = [
    {
        name: "shashi",
        age: 23,
        gender: "Male"
    },
    {
        name: "aman",
        age: 33,
        gender: "Male"
    },
    {
        name: "kika",
        age: 44,
        gender: "male"
    }
];
arr[0].name;
//shashi

//Math Object ---------------------------------------------------------------------------------------------------------------------------

//Property --------------
Math.E;
//2.434387378;
Math.PI;
//3.1434344343;
// Methods -------------
//Absolute ---
Math.abs(-12);
//12 no +ve no -ve only abs no.
//Power
Math.pow(2, 4);
//16 2 pow 4 = 16
//Roundof ---
Math.floor(34.232);
//34 --nearst smallest integer value
Math.ceil(5.5);
//6 --nearst largest integer value
//Random lie bt 0 & 1 but 1 excluded
Math.random();
//0.232323424;
let random = Math.floor(Math.random() * 10)+1;// this will generate random no from 1 to 10


