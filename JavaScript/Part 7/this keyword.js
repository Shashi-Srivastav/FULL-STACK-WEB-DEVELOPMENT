//declaring object 
let students = {
    name: "shashi",
    age: 22,
    eng: 98,
    phy: 88,
    math: 72,
    //declaring function inside object
    average(){
        // let avg =(phy+eng+math)/3 this will thow error
        //we use this. to excess item of its parent object 
        //we cannot acces item of object in its child function
        let avg =(this.eng + this.phy + this.math)/3;
        console.log(avg);
    }
}
students.average();
//86
