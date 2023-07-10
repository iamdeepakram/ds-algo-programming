let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// This function should return a function which takes string as input 
// removes all the alphabets which are present in the forbiddenAlphabets list
// forbiddenAlphabets is a list off alphabets
// Your returned function should take string as input returns a string 
// by removing forbidden alphabets
function wordSmith(forbiddenAlphabets){
    // You can start from here 
    
    function chopWordFromString(inputString){
        let res = '';
       for(let i =0; i<forbiddenAlphabets.legth; i++){
        inputString.replace(/forbiddenAlphabets[i]/g,'');
       } 
       return inputString;
    }

    return chopWordFromString;


}
		
		



// Do not change anything below this line.
let alphabets=readLine();
alphabets = alphabets.split(' ');
let inputString = readLine();
chopper = wordSmith(alphabets);
console.log(chopper(inputString));