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
 * 3. Build logic
 * 4. Code
 * 5. Dry Run
 * 6. Actual execution
 */


let customerName = readLine();
let customerOrder = readLine();

console.log("Hello "+ customerName+" !!!");
console.log("You ordered "+customerOrder+".");