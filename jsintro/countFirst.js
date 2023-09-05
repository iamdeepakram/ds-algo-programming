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
/**
 * Steps:
 * 1. Understand the problem statement
 * 2. Think of new test cases
 * 3. Build logic or write algorithm
 * 4. Code
 * 5. Dry Run
 * 6. Actual execution
 *//**
 * 
 */

let listLength = parseInt(readLine());
let firstElement = parseInt(readLine()); 

let firstCount = 1;

for (let i=1; i<listLength; i++){
    let integerValue = parseInt(readLine());
    if (integerValue == firstElement){
        firstCount +=1
    }
  
}

console.log(firstCount);


