let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// name your function as rightToLeftDiagonal

function rightToLeftDiagonal(matrix){
    // loop through each row in matrix 
    // if condition matches with give logic 
    // print the value 
    let resultmatrix = [];
    for(let i = 0; i<matrix.length; i++){
        // for(let j=0; j<matrix[i].length; j++){
        //     if(j == (matrix[i].length - (i+1))){
                resultmatrix.push(matrix[i][matrix[i].length - (i+1)]);              
        //     }
        // }
    }
    return resultmatrix;

}


// Do not change anything below this line
let m = parseInt(readLine());
let matrix = [];
for (let row = 0; row < m; row++) {
  let rowElements = readLine().split(" ");
  matrix.push(rowElements);
}
let result = rightToLeftDiagonal(matrix);
for (element of result) {
  console.log(element);
}
