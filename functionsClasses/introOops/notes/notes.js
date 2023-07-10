// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1];
// }

// -------- Do NOT edit anything above this line ----------

let user = {username: "Deepak", email: "deepak@gmail.com", password: "12345678"} ;
// Object literals
let userDetails = 
{
    username: {firstname: 'deepak', secondname: 'sutrakar'}, 
    email: "deepak@gmail.com", 
    password: "12345678"
} ;
let n = 3;
console.log(typeof(user));
//Access object
console.log(user.username);
console.log(user['username']);


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
// Assigning function to test gvariable 
let testA = function (a, b){
    console.log(a+b);
}
// Arrow functions
let testB = (a,b) => {
    console.log(a*b);
}

let obj = {
    name : 'deepak',
    age : 22,
    printdetails: function() {
        // assigned function value to this 
        console.log(this.name, this.age);
        return 24;
    }
}


console.log(obj.printdetails);
console.log(obj.printdetails());