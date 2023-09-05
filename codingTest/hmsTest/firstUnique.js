let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ---------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let testCases = parseInt(readLine());

let findFirstUnique = (string)=>{
      
    let charCollection = new Map();
    for(let i=0; i<string.length; i++){
        let character = string[i];
        if(charCollection.has(character)){
            charCollection.set(character, charCollection.get(character)+1);
        }else{
            charCollection.set(character, 1);
        }
    }
    // first non reapeating character 
    for (let i = 0; i < string.length; i++) {
        if (charCollection.get(string[i]) === 1) {
          return i;
        }
      }
    return -1;



}

while(testCases--){
    let string = readLine();
    console.log(findFirstUnique(string));
}

console.log(' sss '.trim());
let s1 = 'yes';
let s2 = 'yes';
let s3 = new String(s1);
console.log(s3 ==s1);
console.log(s1 = s2);
var a = "The10XAcademy";
var result = a.substring(4, 5);
console.log(result);
const b = "10xAcademy";
const x = b.lastIndexOf("a");
console.log(x);