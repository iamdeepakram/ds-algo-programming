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
 * Algorithms
 * 1. read list of integers and split at ' ' 
 * 2. start loop through list with i = 0, j= i+1 
 * 3. match arr[i] == arr[j]
 * 4. if match add +1 to goodPairsCount 
 * 5. if not match do nothing
 * 6. iterate step 3,4,5 till arr length 
 * 7. where i<j always so on each loop change j from i+1, i+2, i+3 ....i+n so on. till length on arr
*/
let listOfIntegers = readLine().split(" ");
let goodPairsCount = 0;
for(let i = 0; i<listOfIntegers.length; i++){
    for ( let j = i+1; j<listOfIntegers.length; j++){
        if(listOfIntegers[i] == listOfIntegers[j]){
            goodPairsCount+=1;
        }
    }
}
console.log(goodPairsCount);


