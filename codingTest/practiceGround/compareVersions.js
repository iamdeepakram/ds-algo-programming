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

let v1 = readLine().split(".");
let v2 = readLine().split(".");

let compare = (v1, v2) =>{
    let latestVersion = 0;
    // check for the length of array 
    for(let i=0; i<v1.length; i++){
        let v1value = parseInt(v1[i]);
        let v2value = parseInt(v2[i]);
        if(v1value == v2value){
            latestVersion = 0;
        } else if(v1value>v2value){
            latestVersion = 1;
            break;
        } else{
            latestVersion = -1;
            break;
        }
    }
    return latestVersion;
}

console.log(compare(v1,v2));