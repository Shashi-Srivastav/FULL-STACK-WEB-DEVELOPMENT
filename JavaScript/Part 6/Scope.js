let num = 34;// num is global scope
function add(num){
    let res = 10;//function scope > global scope
    res = res + num;
    return res;
}
console.log(res);//error not in scope not a global scope.
console.log(add(num));
//44
{
    let blog = 334;// block scope
}
console.log(blog);//error

//Lexical Scope
function outerFunction(){
    let a = 2;
    let b = 3;
    function innerFunction(){
        console.log(a);// it is possible due to Lexical Scope
        let x = 4;
    }
    innerFunction();
    // console.log(x);//error not possible
}
outerFunction();
//2
