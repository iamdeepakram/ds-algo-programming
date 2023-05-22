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
 */


/**
 * Test Cases
 * 
 * Input
 * 2,5,8
 * Output - next predicted number
 * 11
 * 
 * Write arithmetic progression algorithm
 * 
 * Case 2 
 * Input: 2,4,6
 * Output: 8
 */

/**
 * Algorithms:
 * 1. take inputs 
 * 2. find common difference 
 * 3. add C.D to the last input number 
 * 4. show = C.D + last input number 
 */
/**
 * Code 
 */
let values = [parseInt(readLine()), parseInt(readLine()), parseInt(readLine())]
let commonDifference = Math.abs(values[0] - values[1])
let arthimaticProgressionResult = values[values.length - 1] + commonDifference

console.log(arthimaticProgressionResult);


/**
 * Dry Run
 * L1 - values is holding the array of value in input.txt file
 * and we are converting array value from str to int
 * L1 - values = [2,5,8]
 * L2 - we are finding common difference from arrays index 
 * position 0 and 1 | converting -ve output in +ve output 
 * L2 - commonDifference = 2-5 --> Math.abs(-3) ---> 3  <-- integer value
 * L3 - we are taking last value from array and adding it to common difference 
 * and showing arightmatic progressions result
 * L3 - arthimaticProgressionResult = 8+3 --> 11
 */