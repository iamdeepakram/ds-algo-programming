let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Your class should be named as `Rectangle`. 
// Method to get area should be named as `rectangleArea`.
// Method to get perimeter should be named as `rectanglePerimeter`.
// You should be taking `length` and `width` as inputs when creating the object for your class.

class Rectangle{
    constructor(length, width){
        this.length = length;
        this.width = width;

    }
    // Assuming value in provided in integer datatype
    rectangleArea(){
        let area = length*width;

        return (this.checkValueAreValid())?area:0;
    }

    rectanglePerimeter(){
        let perimeter = 2*(length+width);
        return (this.checkValueAreValid())?perimeter:0;
    }

    checkValueAreValid(){

        return (this.length>0 && this.width>0)?true:false;
    }
}


let length = parseInt(readLine());
let width  = parseInt(readLine());
let newRectangle =new Rectangle(length,width);
console.log(newRectangle.rectangleArea());
console.log(newRectangle.rectanglePerimeter());