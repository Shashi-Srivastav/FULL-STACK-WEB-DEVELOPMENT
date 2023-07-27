const student = {
    name: "shashi",
    marks: 34,
    prop: this,//global scope
    getname: function() {
        console.log(this);
        return this.name;
    },
    getmarks:()=>{
        console.log(this);//parent scope -> window 
        return this.marks;
    } 
};
