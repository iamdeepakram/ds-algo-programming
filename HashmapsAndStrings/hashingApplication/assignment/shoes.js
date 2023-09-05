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

let noOfShoes = parseInt(readLine());
let shoesSizesInStore = readLine().split(" ");
let noOfCustomers = parseInt(readLine());

let shoesSizesAvailableInStore = new Map();

let totalPurchase = 0;
let stockUpShoesInStore = () =>{
    for(let i=0; i<noOfShoes; i++){
        let shoeSize = parseInt(shoesSizesInStore[i]);
        if(shoesSizesAvailableInStore.has(shoeSize)){
            shoesSizesAvailableInStore.set(shoeSize, shoesSizesAvailableInStore.get(shoeSize)+1);
        }else{
            shoesSizesAvailableInStore.set(shoeSize, 1);
            
        }
    }
}
stockUpShoesInStore();

for(let i =0; i<noOfCustomers; i++){
    let shoeSizeAndPrice = readLine().split(" ");
    let shoeSize = parseInt(shoeSizeAndPrice[0]);
    let shoePrice = parseInt(shoeSizeAndPrice[1]);
    if(shoesSizesAvailableInStore.has(shoeSize) && shoesSizesAvailableInStore.get(shoeSize) !=0){
        totalPurchase += shoePrice;
        shoesSizesAvailableInStore.set(shoeSize, shoesSizesAvailableInStore.get(shoeSize)-1);
    }
}
console.log(totalPurchase);
