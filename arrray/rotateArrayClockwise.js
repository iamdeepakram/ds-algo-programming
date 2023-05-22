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




let arr = readLine().split(" ");
// If rotation > size of array
// because there  will come a time when array rotation starts repeting itself.
let rotationtimes = parseInt(readLine())%arr.length;

// Brute Force 
// for (let i =0; i< rotationtimes; i++){
   
//     for (let j = 0; j < arr.length; j++){        
//         arr[i] = arr[arr.length-j+rotationtimes];
        
//     }
//    console.log(arr);
// }
function RightRotate(a, n, k)
{
  
    // If rotation is greater
    // than size of array
    k = k % n;
  
    for (let i = 0; i < n; i++) {
        if (i < k) {
  
            // Printing rightmost
            // kth elements
            console.log(a[n + i - k]);
        }
        else {
  
            // Prints array after
            // 'k' elements
            console.log((a[i - k]));
        }
    }
    
}

RightRotate(arr, arr.length, rotationtimes);
  

