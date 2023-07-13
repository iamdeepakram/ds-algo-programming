let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------



// Your class should be named `Circle`.
// Method to get area should be named `getArea`
// Method to get circumference should be named `getCircumference`.
// Your class should take radius `r` as input when creating an object.

class Circle {
    constructor(radius){
        this.radius = radius;
        this.pi = 3.14;

    }
    
    getArea(){

        let area = this.roundOff(this.radius*this.radius*this.pi);
        if(this.radius>0){
            return area;
        }else{
            return 0;
        }
    }
    getCircumference(){
        let circumference = this.roundOff(2*this.pi*this.radius);
        if(this.radius>0){
            return circumference;
        }else {
            return 0;
        }
    }

    roundOff(value){
        return Math.ceil(value);
    }
}



// -------- Do NOT edit anything below this line ----------

let oneCircle = new Circle(parseInt(readLine()));
console.log(oneCircle.getArea());
console.log(oneCircle.getCircumference());