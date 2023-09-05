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


let arrlen = parseInt(readLine());
let arr = [];
for (let j =0; j<arrlen; j++){
    arr[j] = parseInt(readLine());
}


for (let i =0; i<arrlen; i++){
    let noOfCount = 0;
    let valToCompare = arr[i];

    for (let m =i; m<arrlen; m++){
        if (valToCompare === arr[m])
        {
            noOfCount++;
        }
    }
    if(noOfCount === arr[i]){
        console.log(arr[i]);
        break;
    }
    console.log(noOfCount);
    if(noOfCount === 0){
        console.log(parseInt(-1));
        break;
    }
}
