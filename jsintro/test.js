let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format


// find the largest of three number
// a = 10, b= 40, c=30

let a = 10;
let b = 40;
let c = 30;
//------Method 2 --------//
// if(a>b && a>c){
//     console.log(a);
// }
// else if (b>a && b>c){
//     console.log(b);
// }else {
//     console.log(c);
// }
// Ternary implementation of Method 2 

let resultMethod2 = (a>b && a>c)?a:(b>a && b>c)?b:c;

console.log(resultMethod2);





//-----Method1-----------//
// if(a>b){
//     if(a>c){
//         console.log(a);
//     }else{
//         console.log(c);
//     }
// }else{
//     if(b>c){

//         console.log(b);
//     }else{
//         console.log(c)
//     }
// }
// Using Ternary operators 
// let result = (a>b)?(a>c)?a:c:(b>c)?b:c;
// console.log(result);