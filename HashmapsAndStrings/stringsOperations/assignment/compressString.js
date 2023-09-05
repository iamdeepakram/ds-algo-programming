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
/**
 * Approach 
 * aaabbbcccccss --> a3b3c4s2
 * whenever compress string type of problems come 
 * we will use Consecutive element comparison logic. 
 * 
 */
/**
 * 1. read numer of test cases input  
 * 2. read input according to the test cases number 
 * 3. define compress function which takes a input string parameter
 * 3.1 initialize empty string variable 
 * 3.2 break each character in a string from passed string parameter
 * 3.3 compare previous character to next character if they are same 
 * 3.3.1 Create a character count 
 * 3.3.2 Add character and its count to empty string variable 
 * 3.3.3 
 */

let testCases = parseInt(readLine());

function compress(string){
    let count = 1; // if there is one element in string so the count will start from 1 not 0;
    let s = '';
    for(let i =1; i<string.length; i++){ // 1<7
        // a == a
        // b == a
        if(string[i] == string[i-1]){
            count++;
        }else { // st[i] !== st[i-1]
            if(count === 1){
                s+=string[i-1];
            }else{
                s+= string[i-1] + count;
            }
            count = 1;
        }

        
    }
    // for character in the string
    if(count === 1){
        s+=string[string.length-1];
    }else{
        s+=string[string.length-1]+count;
    }
    
    return s;

}
while(testCases > 0){
    let st = readLine();// aabbccd // String --> array of characters
    let result = compress(st);
    console.log(result);
    testCases--;
}
