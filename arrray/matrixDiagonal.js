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
    matrix[i] = readLine().split(" ").map(Number);
}

for(let j =0; j<matrix.length; j++){
    for(let k=0; k<matrix[j].length; k++){
        if(j==k){
            if(matrix[j][k] < 0){
                matrix[j][k] = 0;
            }
            else if(matrix[j][k] >= 0){
                matrix[j][k] = 1;
            }
        }
    }
    console.log(matrix[j].join(" "));
}