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
/**
 * Steps:
 * 1. Understand the problem statement
 * 2. Think of new test cases
 * 3. Build logic or write algorithm
 * 4. Code
 * 5. Dry Run
 * 6. Actual execution
 *//**
 * 
 */


 /**
  * Test Cases:
  * Input:
  * 5
  * 12, 14, 15, 13, 18
  * Output:
  * 2 --> odd
  * 3 --> even
  */

 /**
  * Algorithms
  * 1. get length of list 
  * 2. get integer values list
  * 3. iterate over integer values list 
  * 4. check if values is odd or even 
  * 5. if even add +=1 to odd counter 
  * 6. if odd add +=1 to even counter 
  * 7. show odd numbers count
  * 8. show even numbers count
  */


let listLength = parseInt(readLine());

let oddCount = 0;
let evenCount = 0;

for (let i=0; i<listLength; i++){
    let integerValue = parseInt(readLine());
    if (integerValue%2==0){
        evenCount +=1
    }
    if(integerValue%2!==0){
        oddCount +=1
    }
}

console.log(oddCount);
console.log(evenCount);

