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

let word = readLine().split(" ");

let longestWordLen = 0;
for(let i=0; i<word.length; i++){
    if(word[i].length>longestWordLen){
        longestWordLen = word[i].length;
    }
}
console.log(longestWordLen);
