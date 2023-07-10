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



// let's write some classes 

class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    get area(){
        return this.calaArea();
    }

    calaArea() {
        return this.height*this.width;
    }
    *getSides() {
        yield this.height;

    }


}

const square = new Rectangle(10, 10);

console.log(square.area);

console.log(square.height);