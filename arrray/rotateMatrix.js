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
let matrixRows = parseInt(readLine());
let matrix = [];

for(let q=0; q<matrixRows; q++){
    matrix[q] = readLine().split(" ");
}

let matrixColums = matrix[0].length;

let rotatedMatrix = [];
console.log(matrixColums);
for (let column = 0; column<matrixColums; column++){
    let rotatedRow = [];
    for(let row =0; row<matrixRows; row++){
        rotatedRow[row] = matrix[row][column];
    }
    let s = 0;
    let e = rotatedRow.length -1;
    while(s<=e){
        let temp = rotatedRow[s];
        rotatedRow[s] = rotatedRow[e];
        rotatedRow[e] = temp;
        s++;
        e--;
    }
    // rotatedMatrix.push(rotatedRow);
    console.log(rotatedRow.join(" "));   
}
// console.log(rotatedMatrix);
