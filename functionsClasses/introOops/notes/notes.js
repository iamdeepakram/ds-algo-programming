// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1];
// }

// -------- Do NOT edit anything above this line ----------
//{Key: value, key : value}
let student = { sname: 'tasdik', dob : 03-09-1998, gender : 'M', age : 23 };

// Operations
/**
 * Access 
 * Modify
 * Delete
 * Add
*/

// Object literals
let userDetails = {username: {firstname: 'deepak', lastname: 'sutrakar'}, email: "deepak@gmail.com", password: "12345678"} ;

let user = {username: "Tasdik", email: "deepak@gmail.com", password: "12345678", bio: 'fkdjfldjlfsa', img: 'link'} ;

let n = 3;
console.log(typeof(n));
console.log(typeof(user));

//Access object
console.log('-------');
console.log(user.username);
console.log('-------');
// access array --> ur = [89, 90, e43, ieurdjf]
// ur[1]
// variable['key'] --> value
console.log(user['username']);

// Add value after initializing object 
let uer = {};
console.log(uer);
uer.name = 'Deepak';
uer.email = 'drs@gm.com';
uer.email = 'test@gz.com';
console.log(uer);

// Create functions in three ways
function test(){
    console.log("Hello");
}
test();

// Assigning function to test gvariable 
let testA = function (a, b){
    console.log(a+b);
}
testA();
// Arrow functions
let testB = (a,b) => {
    console.log(a*b);
}
testB();


let obj = {
    name : 'deepak',
    age : 22,
    printdetails: function() {
        // assigned function value to this 
        // this refering to obj 
        // this.name --> obj.name
        console.log(this.name, this.age);
        return 24;
    }
}
console.log(obj.name);
console.log(obj.printdetails);
console.log(obj.printdetails());

/**
 * We can create objects in two ways :
 * 1) Object literals
 * 2) classes
 */


/**
 * Primitive Data type
 * integer, string, float
 * Non - primitive data type
 * object, array 
 */


