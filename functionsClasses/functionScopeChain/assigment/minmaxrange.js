let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}


// ## This function should return single integer. The integer should be maximum value of input list
// ## Please fill the following function
function maximumValue(inputNumbers){
    // write below this herev  
    let max = inputNumbers[0];
    for (let i=0; i<inputNumbers.length-1; i++){
        if(inputNumbers[i]>max){
            max = inputNumbers[i];
        }
    }

    return max;

    
}

// ## This function should return single integer. 
// ## The integer should be minimum value of input list
function minimumValue(inputNumbers){
    // Please write below this
    let min = inputNumbers[0];
    for (let i =0; i<inputNumbers.length-1; i++){
        if(inputNumbers[i]<min){
            min = inputNumbers[i];
        }
    }

    return min;

    
}


// ## This function should return list of integer which lies between m1 and m2. 
// ## if m1 <= m2 return list of numbers between m1 and m2
// ## if m2 <= m1 return list of numbers between m2 and m1
// ## If no such numbers exist in the input list between m1 and m2 return a list with -1 i.e [-1]

// function getNumbersInRange(inputNumbers, m1, m2){
//     // Please write below this line
//     let rangeNumbers = [];

//     // write the loop to iterate ove each element in the list
//     //     compare m1 <= arr[i] && arr[i] <= m2 --> true 
//     //         rangeNumbers.push(arr[i]);
//     //     compare m2 <= arr[i] && arr[i] <=m1 ==> true
//     //         rangeNumbers.push(arr[i])
//     //     check rangeNumbers is still empty or not --> true 
//     //         rangeNumbers.push[-1]

//     for(let i=0; i<inputNumbers.length-1; i++){
//         if(m1<= inputNumbers[i] && inputNumbers[i]<= m2){
//             rangeNumbers.push(inputNumbers[i]);
//         }else if(m2<=inputNumbers[i] && inputNumbers[i]<=m1){
//             rangeNumbers.push(inputNumbers[i]);
//         }
//     }

//     if(rangeNumbers.length == 0){
//         rangeNumbers.push(-1);
//     }

//     return rangeNumbers;
    
// }
function getNumbersInRange(inputNumbers, m1, m2){
    // Please write below this line
    let rangeNumbers = [];
    // x1 is always minimum
    let x1 = (m1 < m2)? m1: m2;
    // x2 is always maximum 
    let x2 = (m1 > m2)? m1: m2;

    for(let i=0; i<inputNumbers.length; i++){
        if(inputNumbers[i] >= x1 && inputNumbers[i] <= x2 ){
            rangeNumbers.push(inputNumbers[i]);
        }
    }

    return (rangeNumbers.length > 0)? rangeNumbers:[-1];
    
}




//  Please do not change anything below this line.
function ConvertToNumber(list){
  for(let each in list){
    list[each]=Number(list[each]);
  }
  return list;
}

let list1 = readLine().split(" ");
let list2 = readLine().split(" ");
let list3 = readLine().split(" ") ;  
ConvertToNumber(list1);
ConvertToNumber(list2);
ConvertToNumber(list3);
let m1 = minimumValue(list1);
let m2 = maximumValue(list2);
let minMaxRange = getNumbersInRange(list3, m1, m2);
console.log(...minMaxRange); 