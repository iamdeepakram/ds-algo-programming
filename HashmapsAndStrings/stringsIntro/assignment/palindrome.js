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

let word = readLine();
word = word.toLowerCase();
let isPalindrome = false;

let start = 0;
let end = word.length-1;

while(start<=end){
    if(start == end){
        if(word[start]==word[end]){
            isPalindrome = true;
        }
    }
    start++; 
    end--;
}

let printIsPalindrome = (isPalindrome)?'YES':'NO';
console.log(printIsPalindrome);

