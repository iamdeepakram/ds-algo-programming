// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1];
// }

// // -------- Do NOT edit anything above this line ----------

// Example of Primitive data type 
// Pass by value 
function changeValuePrimitive(a){
    console.log(a);
    a = 900;
}
let a = 400;
console.log("Before", a);
changeValuePrimitive(a);
console.log("After", a);

// Example of non primitive data type and edit process 
// Pass by reference 
// Example 1
function changeValueNonPrimitive(c, d){
    c = 987;
    d[0] = 444;
}
  
let c = "deepak";
let d = [34, 44];
console.log(c,d);
changeValueNonPrimitive(c,d);
console.log(c, d);

// Example 2  

let e = [1,2,3]
let f = e;
console.log(e,f);
f[0] = 84848;
console.log(e,f);

// but if we don't want to edit the source (e) array 
// Spread Operator

let g = [3,4,5,5]
let h = [...g]
console.log(g,h);
h[0] = 88;
console.log(g,h);



// Call back function 
function parentFunction(){
    a = 400;
    function childFunction(){
        a = 30;
    }
    childFunction();
    return a;

}
console.log(parentFunction());