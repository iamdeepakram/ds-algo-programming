let fs = require("fs");
const { start } = require("repl");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let stairCaseSize = parseInt(readLine()); // 6

let generateString = (strElement, numberOfTimes) => {  // ' ' , 5 | #, 1
    let str = ''; // str = '', ' ', '  ', '   ', '    ','     ' | ''
    for(let i=0; i<numberOfTimes;i++){ // 0<5, 1<5, 2<5, 3<5, 4<5, 5<5--> false | 0<1, 1<1 --> false
        str += strElement; // ' ', '  ', '   ', '    ','     ' | '#'
        // str = str + strElement;
        // i --> 1, 2, 3, 4, 5 | 1
    }
    // 
    return str; // '     ' | #
}

for(let i=1; i<=stairCaseSize; i++){ // 
    let result = generateString(' ', stairCaseSize-i)+generateString('#', i);
    // let result = '     #';
    console.log(result);
}
