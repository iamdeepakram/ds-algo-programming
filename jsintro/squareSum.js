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
  * Test Cases
  * Case1:
  * Input 3
  * Process: 1*1 + 2*2 + 3*3
  * Output: 14
  * 
  * 
  * Case2:
  * Input: 5
  * Process: 1*1 + 2*2 + 3*3 + 4*4 + 5*5
  * Output: 55
  */

/**Algorithm
 * 1. read input number and parse into integer
 * 2. create range from number 
 * 3. take each number and multiply it to itself
 * 4. save it each number multiplied  into and array
 * 5. take new array and add all numbers to each other
 * 6. output the result
 */
/**new Algorithm
 * 1. read input number and parse into integer
 * 2. create square sum result variable  
 * 3. take each number and multiply it to itself
 * 4. add result to square sum result variable
 * 5. output the square sum result 
 */
let naturalNumber = parseInt(readLine());
let squareSumResult = 0;
for (let i =0; i<=naturalNumber; i++){
    squareSumResult += i*i;
}

console.log(squareSumResult);





