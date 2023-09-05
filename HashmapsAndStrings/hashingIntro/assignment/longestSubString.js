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

let totalTestCases = parseInt(readLine());
// abcabcbb --> check for the last occurance of that character
// abc --> bca --> cab --> abc

let longestSubStr = (st) =>{
    let lastOccurance = new Map();
    let longest = 0;
    for(let i=0; i<st.length; i++){
        if(lastOccurance.has(st[i])){
            longest = Math.max(longest,(i-lastOccurance.get(st[i])));
        }else{
            longest = Math.max(longest, i+1);
        }
        lastOccurance.set(st[i], i);
        console.log(lastOccurance);
    }
    return longest;
}

while(totalTestCases>0){
    let st = readLine();
    console.log(longestSubStr(st));
    totalTestCases--;
}

/**
 * 
// Deepaks Approach 
while(totalTestCases>0){
    let s = readLine();
    let subString = '';
    let firstElementInString = s[0];
    if(s.length !== 0){
        for(let i =1; i<s.length; i++ ){
            if(firstElementInString == s[i]){
                subString += s.slice(0,i);
            }
        }
    }
    console.log(subString.length);
    totalTestCases--;
}
*/