const data = {
    email: "123shashi@gmail.com",
    pass: "123password",
};
const newData = {...data, id:123};

let arr = [1,2,3,4,5,6];

//lets print arr as object literal-----------------
let obj1 = {...arr};
obj1;
// {0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6}
// 0: 1
// 1: 2
// 2: 3
// 3: 4
// 4: 5
// 5: 6
// [[Prototype]]: Object