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
 */


let start = parseInt(readLine());
let end = parseInt(readLine())+1;


for (let i = start;i<end; i++){
    if(i>=0 && end>=0){
        console.log(i);
    }else if(i<0 && end<0){
        console.log(parseInt(-1));
        break;
    }
}





