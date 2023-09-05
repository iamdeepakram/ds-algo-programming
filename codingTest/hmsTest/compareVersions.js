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

let compare = (v1, v2) =>{
    let latestVersion = 0;
    // make array equal by adding zeros to it.
    let v1v2array = makeArraysEqual(v1,v2);
    let v1arr = v1v2array[0];
    let v2arr = v1v2array[1];
    for(let i=0; i<v1arr.length; i++){
        if(v1arr[i] == v2arr[i]){
            latestVersion = 0;
        } else if(v1arr[i]>v2arr[i]){
            latestVersion = 1;
            break;
        } else{
            latestVersion = -1;
            break;
        }
    }
    return latestVersion;
}

let makeArraysEqual = (v1, v2) => {
    let maxLength = Math.max(v1.length, v2.length);
  
    while (v1.length < maxLength) {
      v1.push(0);
    }
  
    while (v2.length < maxLength) {
      v2.push(0);
    }
  
    return [v1, v2];
}


while(testCases--){
    let v1v2 = readLine().split(" ");
    let v1 = v1v2[0].split(".").map(Number);
    let v2 = v1v2[1].split(".").map(Number);

    console.log(compare(v1,v2));

}