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


let distributionValues = readLine().split(" ");
let crackers = parseInt(distributionValues[0]);
let users = parseInt(distributionValues[1]);

let difference = crackers%users;
console.log(difference); 