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

let n = parseInt(readLine());
let twon = 2*n;
let arrX = [];
let arrY = [];

for(let i=0; i<n; i++){
    arrX[i] = parseInt(readLine());
}
for (let z =0; z<n; z++){
    arrY[z] = parseInt(readLine());
}

let shuffledArr = [];

for (let j=0; j<n; j++){
    shuffledArr.push(arrX[j],arrY[j]);
}
for (let p=0; p<shuffledArr.length; p++){
    console.log(shuffledArr[p]);

}

