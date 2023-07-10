let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ---------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

class Biller {
    constructor(){
        this.totalBill = 0;
    }

    getBill(){
        return this.totalBill;

    }

    addToBill(price){
        this.totalBill += price;
    }

    removeFromBill(price){
        this.totalBill -= price;
    }

    
}

// -------- DO NOT CHANGE ANYTHING BELOW THIS LINE --------
let n = parseInt(readLine());
let biller = new Biller();
for (let i = 0; i < n; i++) {
  let input = readLine().split(" ");
  let type = input[0];
  let price = parseInt(input[1]);
  if (type === "+") {
    biller.addToBill(price);
  } else {
    biller.removeFromBill(price);
  }
}
console.log(biller.getBill());

// let bill = new Biller();
// bill.addToBill(25);
// bill.addToBill(60);
// bill.removeFromBill(20);
// bill.getBill();