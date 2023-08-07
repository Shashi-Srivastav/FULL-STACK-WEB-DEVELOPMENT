// //Select Element By ID ---------------------------------------------------------------
// // document.getElementById(mainImg); this will not work cause  mainImg is not a variable
// document.getElementById("mainImg");
// // <img ----- this is return as object
// let imgObj = document.getElementById(mainImg);
// console.dir(imgObj);// object form -----------------------
// imgObj.src 
// imgObj.tagName
// //'IMG'
// imgObj.id
// //'mainImg'
// // imgObj.src = ..
// document.getElementById("description");
// document.getElementById("xyz");
// //null

// // Selecting Elements By Class Name ---------------------------------------------------------------
// // return the element collection as HTML COLLECTION or empty if not found\
// document.getElementsByClassName("oldImg");
// well return html collection with objects if have
// select obje by index ---
// document.getElementsByClassName("oldImg")[0];
// let smallImg = document.getElementsByClassName("oldImg");

// for(let i = 0;i<smallImg.length;i++){
//     console.dir(smallImg[i]);
//     // smallImg[i].src = "---"; img will change for all objects inside class oldImg
// }

//Selecting Elements By Tag Name -------------------------------------------------------------------
// console.dir(document.getElementsByTagName("p"));

//Query Selectors ------------------------------------------------------------------------------
// selection just like css 
// return only single matched object not collection ------
// console.dir(document.querySelector("h1"));
// // object printed - only first h1 will return as object not all h1
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));
// //we get complete object
// console.dir(document.querySelector("div a"));

// //to get all elements we use
// console.dir(document.querySelectorAll("div a"));

//Using Properties and Methods --------------------------------------------------------------------------

