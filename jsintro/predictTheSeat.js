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


let testCases = parseInt(readLine());
let berthTypeSequence = ['L', 'M', 'U', 'L', 'M', 'U', 'SU', 'SL'];


for (let i=0; i<testCases; i++){
    let coachDetails = readLine().split(" ");
    let totalBerthsInCoach = parseInt(coachDetails[0]);
    let berthNumber = parseInt(coachDetails[1]);
    for (let m = 1; m<=totalBerthsInCoach; m++){
        if(totalBerthsInCoach === berthNumber){
            console.log(berthTypeSequence[totalBerthsInCoach/berthNumber - 1])
        }

    }

   
}