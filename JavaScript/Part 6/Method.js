//method is an action that can performen on object
//fx defined inside object called methods
const calculator = {
    // Key: Value
    num: 5,
    addd: function (a,b) {
        return a+b;
    },
    sub: function (a,b) {
        return b-a;
    },
    mul: function (a,b) {
        return a*b;
    }
};
//to use
calculator.num;
//5
calculator.addd(2,3);
//5