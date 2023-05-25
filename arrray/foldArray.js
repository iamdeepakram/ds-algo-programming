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

let arrayLength = parseInt(readLine());
let arr = [];
for (let j=0; j<arrayLength; j++){
    arr[j] = parseInt(readLine());
}
let noOfFolds = parseInt(readLine());
let outputArr = [];

for(let i = 0; i<arr.length; i++){
    outputArr[i] = arr.shift() + arr.pop();
    if(arrayLength%2 !== 0){
        outputArr[outputArr.length] = arr[0];
    }
    
}

console.log(outputArr.length);
console.log(outputArr);