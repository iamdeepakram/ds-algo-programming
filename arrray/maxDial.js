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

let numbersOfDials = parseInt(readLine());
let maxLimitOfDials = parseInt(readLine());

let numberOfInputs = parseInt(readLine());
let inputsArr = [];

for (let u=0; u<numberOfInputs; u++){
    inputsArr[u] = parseInt(readLine());
}

let count = 0;
for (let i=0; i<numberOfInputs; i++){
    let toCompareVal = inputsArr[i];
    for (let z=0; z<numberOfInputs; z++){
        if(toCompareVal == inputsArr[z]){
            count +=1;
        }
    }
    if(maxLimitOfDials == count){
        console.log(inputsArr[i]);
    }
}
