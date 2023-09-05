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
let totalBirdSights = parseInt(readLine());
let birdType = readLine().split(" ");

let birdTypeSightingFrequency = new Map();

let creatBirdSightingCollection = (sightingArr, birdSights) => {
    for(let i=0; i<birdSights; i++){
        if(birdTypeSightingFrequency.has(sightingArr[i])){
            birdTypeSightingFrequency.set(sightingArr[i], birdTypeSightingFrequency.get(sightingArr[i])+1);
        }else{
            birdTypeSightingFrequency.set(sightingArr[i], 1);
        }
    }
}

creatBirdSightingCollection(birdType, totalBirdSights);

let getLowestTypeBirdOfMostFrequentSights = (sightingData) => {
    let lowestBirdtype = [];
    let highestSightingFrequency = 0;
    // got the highest sighting frequency
    for(v of sightingData.values()){
        if(v>highestSightingFrequency){
            highestSightingFrequency = v;
        }
    }
    // get the birds id with most sighting frequency
    for([k,v] of sightingData){
        if(v == highestSightingFrequency){
            lowestBirdtype.push(parseInt(k));
        }
    }
    
     
    return Math.min(...lowestBirdtype);
}

console.log(getLowestTypeBirdOfMostFrequentSights(birdTypeSightingFrequency));