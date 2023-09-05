

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split("\n");
function readLine(){
    idx++;
    return data[idx - 1].trim();
}

/**
 * 1. capture the given values like :- n lines, age and gender
 * 2. write a function that capture age and gender as arguments 
 * and return true or false.
 * 3. we will be writing a loop to extract each value 
 * 3. write if else to print person is eligible or not.
 */

let lines = parseInt(readLine());

function personIsEligibleOrNot(age, gender){
    let result = false;
    age = parseInt(age);
    gender = gender.toLowerCase();
    if(gender == 'f'){
        if(age > 58){
            result = true;
        }
    }else if(gender == 'm' || gender == 't'){
        if(age > 60 ){
            result = true;
        }
    }   

    return result;
}

for(let i =0; i<lines; i++){
    let ageGender = readLine().split(" ");
    if(personIsEligibleOrNot(ageGender[0], ageGender[1]) == true){
        console.log("Eligible");
    } else {
        console.log("Not Eligible")
    }
}



/**
 * Efficient approach
 */

function solve(){
    let inputData = readLine().split(" ");
    let age = parseInt(inputData[0]), gender = inputData[1];
    if(((gender == "M"  || gender =="T") && age > 60) || (gender == "F" && age>58)){
        console.log("Eligible");

    }else {
        console.log("Not Eligible");
    }
}

for(let i=0; i<lines; i++){
    solve();
}