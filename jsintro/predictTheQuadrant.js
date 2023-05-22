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
  * Case1
  * Input: 
  * L1: 2
  * L2: 2, -9 
  * L3: 1 3 
  * 
  * Process: 
  * 
  * Output: 
  * Q4
  * Q1 
  * 
  * Case2
  * Input:
  * L1 : 3
  * L2 : 3 , -5
  * L3 : 4, 6
  * L4 : -2, 4
  * 
  * Output:
  * Q4
  * Q1
  * Q2
  */


 /**
  * Algorithms
  * 1. first input - number of test cases  
  * 2. coordinate1  (x, y)
  * 3. coordinate2 (x, y)
  * 
  * for (i in range(t)):
  * if (x > 0 and y > 0){
  * console.log("Q1") 
  * } 
  * if (x < 0 and y > 0){
  *   Q2
  * }
  * if (x < 0 and y < 0){
  * Q3
  * } 
  * if (x > 0 and y < 0)
  * {
  * Q4
  * }  
  *  
  * 
  * 
  */

//  Code 

let numberOfTestCases = parseInt(readLine()); // 2 
let i = 0;

while (i<numberOfTestCases){
    let quadrants = readLine().split(" ");
    let xQuad = parseInt(quadrants[0]);
    let yQuad = parseInt(quadrants[1]);
    if (xQuad > 0 && yQuad > 0){
        console.log("Q1");
    } 
    if (xQuad < 0 && yQuad > 0){
        console.log("Q2");
    }
    if (xQuad < 0 && yQuad < 0){
        console.log("Q3");
    } 
    if (xQuad > 0 && yQuad < 0)
    {
        console.log("Q4");
    } 
    i++;
}



