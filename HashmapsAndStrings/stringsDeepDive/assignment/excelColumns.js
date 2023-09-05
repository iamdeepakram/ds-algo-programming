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

let alphabetCollection = new Map();
let alphabetSize = 26;
for(let i=0; i<alphabetSize; i++){
    alphabetCollection.set(26-i, String.fromCharCode('A'.charCodeAt(0)+i));
}

let getAlphabet = (number)=>{
    let alphabet = alphabetCollection.get(number);
    return alphabet;

}

let columnNameFromNumber = (columnNumber) => {
    if(columnNumber<=alphabetSize){
        return getAlphabet(columnNumber);
    }else {
        let str = '';
        str+=getAlphabet(Math.floor(columnNumber/alphabetSize));
        str+=getAlphabet(Math.floor(columnNumber%alphabetSize));
        return str;
    }
}

let testCases = parseInt(readLine());
while(testCases--){
    let columnNumber = parseInt(readLine());
    console.log(columnNameFromNumber(columnNumber));
}

