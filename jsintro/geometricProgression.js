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
 * 
 */
/**
 * Test Cases:
 * Case 1
 * Input: 2, 4, 8
 * ratio = 4/2=2
 * fourth = 8*2 = 16
 * Output: 16
 * Case 2 
 * Input: 3, 6, 12
 * ration 6/3 = 2
 * fourth = 12*2 = 24
 * Output: 24
 * Case 3
 * Input: 5, 10, 20
 * ratio = 10/5
 * fourth = 20*2 = 40
 * Output: 40
 */
/**
 * Algorithms
 * Input --> Process ---> Output
 * 
 * 1. store input values in array
 * 2. find common ratio 
 * 3. multiplye last element in array with c.r.
 * 4. show the output
 */
/**
 * 
 * Geometric Progression
 * 
 * a*r^0 + a*r^1+ a*r^2 + a*r^3+....
 * */ 

/**
 * Build the logic
 * 1. store input values -- a1, a2, a3
 * 2. find common ratio using a1 and a2  
 * 3. confim common ratio by comparing a2/a1 == a3/a2
 * 4. write geometric progression formula an = a*r^(n-1)
 * 5. iterate till we get geometirc progression at n=4th time
 * 6. show the 4th result
 */

let a1 = parseInt(readLine()); 
let a2 = parseInt(readLine()); 
let a3 = parseInt(readLine());
let commonRatio = a2/ a1;
let a4 = a3*commonRatio;
console.log(parseInt(a4));