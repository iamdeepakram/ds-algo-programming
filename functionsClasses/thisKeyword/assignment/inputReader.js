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
class InputReader {
	//implement the methods here 
    constructor(){
        this.index = 0;
    }

    readStrings(value){
        let message = (this.index)+" "+value;
        this.index +=1;
        return console.log(message);
    }
    readIntegers(value){
        let message = (this.index)+" "+value
        this.index +=1;
        return console.log(message);
    }
    readFloats(value){
        let message = (this.index)+" "+parseFloat(value).toFixed(2);
        this.index +=1;
        return console.log(message);

    }


};

// -------- Do NOT edit anything below this line ----------

let num = parseInt(readLine());
let typeOfInput = readLine();
let NewInputReader = new InputReader();	
for (let i=0; i< num; i++){
    if (typeOfInput === "string") {
            NewInputReader.readStrings(readLine());
    } else if (typeOfInput === "integer") {
            NewInputReader.readIntegers(readLine());
    } else {
            NewInputReader.readFloats(readLine());
    }

}