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



/** 
 * Algorithms 
 * get no of entries 
 * get person sport string 
 * add it to personsSport map ==> person : sport
 *  if person already exists does not add their later response on sport
 *  else add person and their sport in personsSport Map
 * create another sports map which holds the all sport map and their likebility by people count
 * 
 * loop values of personsSport values
 *      check if sportmap has personsport value map 
 *          sportsmap.set(sportname, sportmap.get(value)+1) 
 *  
 * print out the sport name which is most likable
 * print out the sport football likability number 
*/

let noOfEntires = parseInt(readLine());
let personSport = new Map();
let sports = new Map();
while(noOfEntires--){
    let personSportEntry = readLine().split(" ");
    let personName = 0;
    let sportName = 1;
    if(!personSport.has(personSportEntry[personName])){
        personSport.set(personSportEntry[personName], personSportEntry[sportName]);
    }
    if(!sports.has(personSportEntry[sportName])){
        sports.set(personSportEntry[sportName], 0);

    }
    
}

for(sportname of personSport.values()){
    if(sports.has(sportname)){
        sports.set(sportname, sports.get(sportname)+1);
    }
}
// maximum likes
let maximymLikability = Math.max(...sports.values());
let mostLikedSport = []; // lexicographically

for([k, v] of sports){
    if(v == Math.max(...sports.values())){
        mostLikedSport.push(k); 
    }
}
// print most liked sport lexicographically
mostLikedSport.sort();
console.log(mostLikedSport[0]);

// print football liked by how many people
console.log(sports.get('football'));
