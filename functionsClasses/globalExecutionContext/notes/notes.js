let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
 
/**
 * Problem: Library books query
 * n = 3
 * hcverma, cengage, rd sharma
 * q = 2
 * hcverma
 * n (no of books)
 * next n lines would be the book names
 * q (integer)
 * hcverma
 * 
 * Available 
 * Not Available
 */

function checkBook(queryBook, Books){
    for(let i =0; i<Books.length; i++){
        if(queryBook == Books[i]){
            return "Available";            
        }
    }
    return "Not Available";
}

let n = parseInt(readLine());
let books = []

for (let i =0; i<n; i++){
    let currentBook = readLine();
    books.push(currentBook);
}

let q = parseInt(readLine());

for(let i=0; i<q; i++){
    let query = readLine();
    console.log(checkBook(query, books));
}



/**
 * Multi Multi Multi Nesting
 * 
 */

function gp(){
    let a = 200;
    function p(){
        function c(){
            console.log(a);
            a = 300;
            console.log(a);
        }
        c();
        console.log(a);
    }
    p();
    a = 655;
    p(); 
}
gp(); 
