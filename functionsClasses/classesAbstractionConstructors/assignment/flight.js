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
class Flight {
	constructor(upTime,downTime){
		this.upTime=upTime;
		this.downTime=downTime;
	}
	calculateFlight(){
		//write your code here
        let upTimeMinutes = this.getMinutes(this.upTime);
        let downTimeMinutes = this.getMinutes(this.downTime);
        
        let flighTimeInMinutes = Math.abs(downTimeMinutes-upTimeMinutes);
        return flighTimeInMinutes;
		
	}
    getMinutes(TimeInHHMM){

        let hhmm = TimeInHHMM.split(":");
        let totalMinutes = parseInt(hhmm[0])*60+parseInt(hhmm[1])
        return totalMinutes;

    }
}

// -------- Do NOT edit anything below this line ----------
let upTime=readLine();
let downTime=readLine();
let NewFlight = new Flight(upTime,downTime);
console.log(NewFlight.calculateFlight());