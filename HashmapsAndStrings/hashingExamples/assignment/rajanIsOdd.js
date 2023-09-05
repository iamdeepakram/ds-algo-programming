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
let n = parseInt(readLine());
let arr = readLine().split(" ");
let arrMap = new Map();

for(let i=0; i<arr.length; i++){
    if(arrMap.has(arr[i])){
        arrMap.set(arr[i], arrMap.get(arr[i])+1);
    }else{
        arrMap.set(arr[i], 1);

    }
}
for([k,v] of arrMap.entries()){
    if(v == 1 ){
        console.log(k);
    }
}