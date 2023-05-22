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
  * 
  * Case1:
  * Input: 30, 110
  * Output: 40
  * 
  * Case2:
  * Input: 50, 60
  * Output: 70
  * 
  * Case3:
  * Input: 90, 32
  * Output: 58
  * 
  */

 /**
  * Algorithm
  * 1. store first angle
  * 2. store second angle
  * 3. thirdAngle = 180 - (firstAngle + secondAngle)
  * 4. show thirdAngleResult
  */

let angleA = parseInt(readLine());
let angleB = parseInt(readLine());

let angleC = 180 - (angleA + angleB);

console.log(angleC)