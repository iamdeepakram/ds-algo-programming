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

let sizeOfString = parseInt(readLine());
let st = readLine();
let allVowels = ['a', 'e', 'i', 'o', 'u'];
let hasAllVowels = [];

for(let i=0; i<sizeOfString; i++){
    for(let j=0; j<allVowels.length; j++){
        console.log(st[i], allVowels[j])
        if(st[i] == allVowels[j]){
            hasAllVowels.push(true);

        }
    }
}

let result = (hasAllVowels.length == allVowels.length)?'YES':'NO';
console.log(result);