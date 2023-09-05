let fs = require("fs");
const { start } = require("repl");
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
let rows = 2*n-1;

let spaces = n-1;

for (let i=1; i<=rows; i++){
    let str = '';
    // to add spaces to str
    for (let m = 0; m<=spaces; m++){
        str+= ' ';
    }
    // to add start to str
    let stars = rows - 2*spaces;
    for (let j = 0; j<stars; j++){
        str+= '*';
    }
    
    if(i<n){
        spaces--;
    }
    if(i>=n){
        spaces++;
    }

    console.log(str);

}


// console.log('  *  '); // --> 1

// console.log(' *** ');
// console.log('*****');
// console.log(' *** ');
// console.log('  *  ');
