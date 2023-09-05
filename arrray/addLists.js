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
let aaronIntegers = [];

for(let i =0; i<twon; i++){

    aaronIntegers.push(readLine().split(" ").map(Number));
}
let b = Number.NEGATIVE_INFINITY;
console.log(b);
let input=[2,4,6,8,10,12];
while(input.length>0){
    let len=parseInt((input.length)/2)
    input=input.slice(0,len);
    console.log(input);
}

let t = 5

while(true){

    if(t%9 === 0){

        console.log("---");
        console.log(t);
        break
    }

    t = t+1
    console.log(t);

}
console.log('--------')
let arr = [1,2,3,4,5];

let maxx=0;

for(let i=0; i<5; i++){

    if(arr[i]>maxx){

        arr[i]=maxx;

    }
console.log(i);
console.log(maxx);
}





























