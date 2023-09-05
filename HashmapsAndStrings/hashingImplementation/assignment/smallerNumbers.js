let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

/**
 * Algorithm
 * - take length of nums array as input
 * - create nums array 
 * - create map of nums with k --> nums and v --> 0 initial count of nums
 * - write the loop on length
 * - compare element except itself with all the other elements in array nums
 * - if current element > other elements in array nums
 * - add 1 to count 
 * - when out of each loop
 * - add the count as value to created empty map using current comparing value as key.
 * - write a loop on maps values in print them out one by one as final result.
 */

let numsLength = parseInt(readLine());
let nums = [];
for(let i =0; i<numsLength; i++){
  let currentNum = parseInt(readLine());
  nums.push(currentNum);
}

for(let j=0; j<nums.length; j++){ // 0<5
  let smallerNumsCount = 0; //0
  for(let k=0; k<nums.length; k++){ // 0<4, 1<4
    if(nums[j]>nums[k]){ // 8<8 && 0!=0, 8<1 && 0
      smallerNumsCount +=1; // 0
    }
  }
  console.log(smallerNumsCount);
}

