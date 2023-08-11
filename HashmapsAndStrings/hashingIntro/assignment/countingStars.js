let fs = require("fs");
const { test } = require("node:test");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let testCases = parseInt(readLine());

while(testCases--){
    let stSize = parseInt(readLine());
    let st = readLine();
    let tillNowAppearedAlphabets = new Map();
    let countArray = 0;
    for(let i=0; i<stSize; i++){
        if(tillNowAppearedAlphabets.has(st[i])){
            countArray+=tillNowAppearedAlphabets.get(st[i]);
            tillNowAppearedAlphabets.set(st[i], tillNowAppearedAlphabets.get(st[i])+1);
        }else{
            countArray+=0;
            tillNowAppearedAlphabets.set(st[i], 0+1);
        }
    }
    console.log(countArray);
}    

