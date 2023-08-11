let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

let numberOfTestCases = parseInt(readLine());
let messageReceived = readLine();
let messageGuessed = readLine();


// Function to check if the guessed message can be formed using the received message

function canFormGuessedMessage(messageReceived, messageGuessed) {
  let receivedChars = messageReceived.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let guessedChars = messageGuessed.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  for (let i = 0; i < guessedChars.length; i++) {
    let char = guessedChars[i];
    let charCountInReceived = receivedChars.split(char).length - 1;
    let charCountInGuessed = guessedChars.split(char).length - 1;
    
    if (charCountInGuessed > charCountInReceived) {
      return false;
    }
  }
  
  return true;
}

for (let i = 0; i < numberOfTestCases; i++) {
    console.log((canFormGuessedMessage(messageReceived, messageGuessed))?'YES':'NO');
}

console.log('123'+123);
console.log('10xAcademy'.lastIndexOf('a'));

console.log('The10XAcademy'.substring(4,5));