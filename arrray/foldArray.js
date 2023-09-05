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
 *   odd Array         -- no of folds
 * [-1, 4, 2, 3, 1] -- 0
 * [0, 7, 2] -- 1
 * [2,7] -- 2
 * [9] -- 3
 * 
 * even array        -- no of folds
 * [ 3, 1, 6, 7, 2, 3 ] -- 0
 * [6,2,13] -- 1
 * [19,2] --2
 * [21] -- 3
 */

