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

// innerText----------
//shows the visible text contained in a node
// let para = document.querySelector('p');
// console.dir(para);
// para.innerText;

// //innerHtml
// //show full text
// para.innerHTML;

// //textContent
// //show the full markup
// para.textContent;

//Manipulating Attributes --------------------------------------------------------------------------------
// let img = document.querySelector('img');
// img.getAttribute('id');
// img.setAttribute('id','spidermainImg');
// img.setAttribute('src','../assets/creation_3.jpeg');
// img.getAttribute('class');
// //null
// img.setAttribute('class','customclass');

//Manupulating Styles ----------------------------------------------------------------------------------
// let heading = document.querySelector('h1');
// heading.style;
// heading.style.color = 'red';
// heading.style.backgroundColor = 'blue';

//Using Class List --------------------------------------
// let img = document.querySelector('img');
// img.classList;
// img.classList.contains("customclass");
// //false
// let heading = document.querySelector('h1');
// heading.classList.add("customclass");
// heading.classList;
// //names of diff diff classes
// heading.classList.remove("customclass");

//Navigation Page -----------------------------------------------------------------------------------------
// let h4 = document.querySelector('h4');
// h4.parentElement;
// h4.children;
// //empty
// let box = document.querySelector('.box');
// box.children;
// box.childElementCount;
// let ul = document.querySelector('ul');
// ul.children;
// ul.children[0];
// ul.children[1];
// ul.children[2];
// ul.children[1].previousElementSibling;
// ul.children[1].nextElementSibling;

//Adding Elements -----------------------------------------------------------------------------------------
// appendChild
// append

document.createElement('p');
let newVar = document.createElement('p');
newVar.innerText = "hi i am new p";
newVar.append("its now appended !");
// //to insert element we use append fx it it will add element in end of html page
let body = document.querySelector('body');
body.appendChild(newVar);
// let btn = document.createElement('button');
// btn.innerText = "click me";
// box.appendChild(btn);
