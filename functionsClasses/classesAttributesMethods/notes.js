// Object literals - because we are passing value directly to student1 attributes

let student1 = {
    name : {
        firstName: "Deepak",
        lastName: "Sutrakar"
    },
    rollNumber : 184567,
    age : 22
}


// Methods
// Access
console.log(student1.name.firstName);

// Edit or override  
student1.rollNumber = 384756;
console.log(student1.rollNumber);


// Create another student object 
let student2 = {
    name : {
        firstName: "Sanjay",
        lastName: "Tiwari"
    },
    rollNumber : 184567,
    age : 22
}

// but above approach is repetative for every object  
// so we can approach it via function 

function studentDetails(firstName, lastName, age, rollNumber){
    
// it is returning the complex data type 
    return {
        name : {
            firstName: "Sanjay",
            lastName: "Tiwari"
        },
        rollNumber : 184567,
        age : 22
    };
}

let data = studentDetails('deepak', 'arya', 22, 898943);
console.log(data);

/**What is the task of oops?
 * 
 */

// let's create class 
// attributes (properties) --> name, rollnumber, branch, age, gender
// we'll define the all attributes in the constructor 
class Student {
    // it is like a funciton 
    // every class have their constructor 
    // constructor --> kind of method or function
    // constructor() {
    //     console.log('student constructior');
    // }

    // passing arguments to constructor 
    constructor(name, age) {
    // this --> when object is initialized 
        this.name = name;
        this.age = age;
    }
    // functionalities
    // method inside student class
    printDetails(){
        console.log(this.name, this.age);
    }
}

// new --> allocate memory in heap we use new operator
// Student() is not a function it is a classs
// this --> refers to in below case is studentA 
let studentA = new Student('sanjay', 22);
// studentA = {name: 'sanjay', age: 22}
// this --> refers to in below case is studentB 
// studentB = {name: 'john', age: 22}
let studentB = new Student('john', 67);

console.log(studentA.name, studentB.age);
// accessing function with studentA
studentA.printDetails();

studentB.printDetails();

/**
 * Till now what we did
 * 1. Grouping data into single entity 
 * 2. Attaching functionallities to grouped data
 * */ 




/**
 * Example for class
 * Fruit --> properties --> (weight, color, taste, price, smell)
 * fruits is class
 * apple, mango, oranges 
 * 
 * apple --> it's an object of fruit's class
 * apple properites --> (300 grams, red, sweet, 25, goodsmell)
 * orange --> Properties --> (200 grams, orange, tangy, )
 */





// let's write some classes 
class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    get area(){
        return this.calcArea();
    }
    //methods
    calcArea() {
        return this.height*this.width;
    }
    *getSides() {
        yield this.height;

    }


}
// square = {
//    height:10, 
//    width:10, 
//    area: function(){return this.calcarea()}, 
//    clacArea: function(){return this.h}
//};
// square2 = {
//    height:20, 
//    width:20, 
//    area: function(){return this.calcarea()}, 
//    clacArea: function(){return this.h}
//};
let square = new Rectangle(10, 10);
let square2 = new Rectangle(20, 20);
console.log('---------')
console.log(square.area);
console.log(square.height);
console.log(square2.width);
console.log('---------')

/**
 * BP Problem Solution Approach
 */

class BPRecord {
    constructor(systolic,  diastollic){
        this.systolic = systolic;
        this.diastollic = diastollic;

    }

    generateReport(){
        console.log('Blodd Pressure is '+this.systolic+'.'+this.diastollic);
        if(this.systolic > 140 || this.diastollic >90){
            console.log('High BP');
        } else if (this.systolic < 90 || this.diastollic < 60){
            console.log('Low BP');
        } else {
            console.log('Normal BP');
        }
        
    }
}
let getBPStatus = new BPRecord(145, 85);
getBPStatus.generateReport();