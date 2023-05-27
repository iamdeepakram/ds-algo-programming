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

for (let i =0; i<matrixRows; i++){
    matrix[i] = readLine().split(" ");
}

let matrixColumns = matrix[0].length;

let transposedMatrix = [];

for (let column=0; column<matrixColumns; column++){
    let newRows = [];
    for(let row=0;row<matrixRows; row++){
        newRows[row] = matrix[row][column];
    }
    // transposedMatrix[column] = newRows;
    console.log(newRows.join(" "));
}




// console.log(transposedMatrix);