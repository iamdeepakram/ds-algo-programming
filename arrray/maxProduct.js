let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let arrayALen = parseInt(readLine());
let arrayBLen = parseInt(readLine());

let arrA = readLine().split(" ").map(Number);
let arrB = readLine().split(" ").map(Number);

function findMaxValue(array){
    let maxValue = 0;
    let p1 = 0;
    while(p1<array.length){
        if(Math.abs(array[p1]) > maxValue){
            maxValue = Math.abs(array[p1]);
        }
        p1++;
        
    }
    return maxValue;

}

let maxA =  findMaxValue(arrA);
let maxB = findMaxValue(arrB);

let maxProduct = maxA*maxB;
console.log(maxProduct);
