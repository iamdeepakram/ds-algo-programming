let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

let teamMemberNames = readLine().split(' ');
let happinessRatings = readLine().split(' ');

let averageHappinessRating = 0;

for(let i =0; i<teamMemberNames.length; i++){
  averageHappinessRating += parseInt(happinessRatings[i])
}

if(averageHappinessRating/happinessRatings.length>=5){
  console.log("I still have a job");
}else {
  console.log("They fired me");
}