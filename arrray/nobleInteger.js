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


let noOfElements = parseInt(readLine());
let elements = [];

for(let i=0; i<noOfElements; i++){
    elements.push(parseInt(readLine()));
}
let canPrint = false;
let count = 0;
for(let j=0; j<noOfElements; j++){ // 0
    let valueToCompare = elements[j]; //3
    for(let k=0; k<noOfElements; k++){ // 0
        if(elements[k]>valueToCompare){ // 
            count++;
        }
        
    }
    if(count == valueToCompare){
        canPrint = true;
    }
    
}
(canPrint)?console.log('1'):console.log('-1');
