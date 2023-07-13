let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// DEFINE YOUR CLASS HERE

class HopRacing{
    constructor(){
        this.position = 0;
        this.round = 0;
    }

    jumpPosition(position){
        this.position +=position;
        this.round +=1;
    }
    getPosition(){
        return this.position;
    }
    getRounds(){
        return this.round;
    }
}

// DO NOT EDIT ANYTHING BELOW THIS LINE

let Num = parseInt(readLine());
let HopRacer1 = new HopRacing();
let HopRacer2 = new HopRacing();



for (let i = 0; i < Num; i++) {
  let input = readLine().split(" ");
  let ID = parseInt(input[0]);
  let hopAmount = parseInt(input[1])

  if (ID === 1) {
    HopRacer1.jumpPosition(hopAmount);
  } else {
    HopRacer2.jumpPosition(hopAmount);
  }
}

if (
  HopRacer1.getPosition() >= 10 &&
  HopRacer1.getRounds() <= HopRacer2.getRounds()
) {
  console.log(1);
} else if (
  HopRacer2.getPosition() >= 10 &&
  HopRacer1.getRounds() > HopRacer2.getRounds()
) {
  console.log(2);
}