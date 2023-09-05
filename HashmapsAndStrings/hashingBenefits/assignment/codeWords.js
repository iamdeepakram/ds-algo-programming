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
let testCases = parseInt(readLine());
let words = readLine().split(" ");
let morseCode =  [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
let alphabetToMorseCodeMap = new Map();
let alphabetCharsSize = 26;
for(let i=0; i<alphabetCharsSize; i++){
    let aCharCode = 'a'.charCodeAt(0);
    alphabetToMorseCodeMap.set(String.fromCharCode(aCharCode+i), morseCode[i]);

}
while(testCases--){
    let wordsToMorseCodeMap = new Map();
    let wordsToMorseCodeUniqueValues = new Set();
    for(let j=0; j<words.length; j++){
        let morseCodeFormation = '';
        for(let k =0; k<words[j].length; k++){
            if(alphabetToMorseCodeMap.has(words[j][k])){
                morseCodeFormation += alphabetToMorseCodeMap.get(words[j][k]);
            }
        }
        wordsToMorseCodeMap.set(words[j], morseCodeFormation);
        wordsToMorseCodeUniqueValues.add(morseCodeFormation);
    }

    console.log(wordsToMorseCodeUniqueValues.size);
}