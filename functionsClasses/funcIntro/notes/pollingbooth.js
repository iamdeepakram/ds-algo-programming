let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

let voterId = parseInt(readLine());

let electricityOffice = [4701,1517,8367,4979,1408,5467,4892,1665];
let highSchool = [2028,9020,5502,6833,9699,2095,4922,9165,7744,7487,8792,6475,3641,3646,1080];
let workOffice = [8006,1434,3312,4111,7830,6918,6569,2038,1772,6907,3004];


/**
 * In this method we are searching for voterId in 
 * three locations which is passed as a list for each location. 
 * 
 * So we have 3 separate lists to search our voter in it.
 * We are going to loop through each element and
 * compare it with voterid after that 
 * if comparing is true it will 
 * print the location name 
 * 
 * 
 * Complexities Analysis 
 * It is for finding voterid in one location.
 * Which means it has time complexity Big O(n). --> in short you have one for loop running one at a time.
 * 
 */
// let found = false;

// for(let i =0; i<electricityOffice.length; i++){
//     if(voterId == electricityOffice[i]){
//         console.log("Electricity Office");
//         found = true;
//         break;
//     }
// }
// for(let i =0; i<highSchool.length; i++){
//     if(voterId == highSchool[i]){
//         console.log("High School");
//         found = true;
//         break;
//     }
// }
// for(let i =0; i<workOffice.length; i++){
//     if(voterId == workOffice[i]){
//         console.log("work Office");
//         found = true;
//         break;
//     }
// }

// if (!found){
//     console.log("Id not found");
// }


/**We need to optimize above code structure and performance 
 * To do that we need to create for loop functionality in a function 
 * So it will be moduler and can be plugged into other use cases in future.
*/
/**
 * It is less repetative code than its ancestor. 
 */

function searchLocationFromVoterId(voterId, locations){
    for(let i=0; i<locations.length; i++){
        if(voterId == locations[i]){
            return true;
        }
    }
}

/**Here we will be creating conditional logic to print filter response */

if(searchLocationFromVoterId(voterId, electricityOffice)){
    console.log("Electricity Office");
} else if(searchLocationFromVoterId(voterId, highSchool)){
    console.log("High School");
} else if(searchLocationFromVoterId(voterId, workOffice)){
    console.log("Work Office");
} else {
    console.log("Id not found")
}
