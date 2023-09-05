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

let numberOfSocks = parseInt(readLine());
let colorsOfSocksInPile = readLine().split(" ").map(Number);
let coloredSocksCount = new Map();
for(let i=0; i<numberOfSocks; i++){
    if(coloredSocksCount.has(colorsOfSocksInPile[i])){
        coloredSocksCount.set(colorsOfSocksInPile[i], coloredSocksCount.get(colorsOfSocksInPile[i])+1);
    }else{
        coloredSocksCount.set(colorsOfSocksInPile[i], 1);

    }
}

let getPairsCount = (coloredSocksMap) =>{
    let pairsCount = 0;
    for(v of coloredSocksMap.values()){
        pairsCount += Math.floor(v/2);
    }
    return pairsCount;
}

console.log(getPairsCount(coloredSocksCount));