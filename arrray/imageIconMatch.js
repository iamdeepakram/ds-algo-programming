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

let noOfPixels = parseInt(readLine());
let pixels = [];
for (let i=0; i<noOfPixels; i++){
    pixels.push(parseInt(readLine()));
}
let noOfIconPixels = parseInt(readLine());
let iconPixels = [];
for (let i=0; i<noOfIconPixels; i++){
    iconPixels.push(parseInt(readLine()));

}

let count = 0;
for (let j=0; j<noOfIconPixels; j++){
    let valueToLookFor = iconPixels[j];

    for(let h=0; h<noOfPixels; h++){
        if(valueToLookFor == pixels[h]){
            count +=1;
        }
    }
}

console.log(count/noOfIconPixels);