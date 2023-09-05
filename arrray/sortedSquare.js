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

// get data from input
let arrayLength = parseInt(readLine());
let elements = [];
for(let i=0; i<arrayLength; i++){
    elements[i] = parseInt(readLine());
}
// square elements in array
for(let j=0; j<arrayLength; j++){
    elements[j]=elements[j]*elements[j]
}
// sort elemensts in asecending order in array
let k =0;
while(k<arrayLength){
    let p1 = k;
    let p2 = k+1;
    if(p1>=arrayLength){
        p1=0;
    }
    if(p2>=arrayLength){
        p2=0;
    }

    if(elements[p2]>elements[p1]){
        let temp = elements[p1];
        elements[p1] =  elements[p2];
        elements[p2] = temp;
    }
   
    k++;

    console.log(elements);
}