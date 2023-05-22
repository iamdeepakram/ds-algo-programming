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

let noOfBooks = parseInt(readLine());

let books = new Array(); // create an empty array
for (let i =0; i<noOfBooks; i++){
    books.push(readLine()); // adding elements to array
}
console.log("Printing all array elements.");
console.log(books); // printing the array

// how to access elements from array
console.log("Accessing first element in array.");
console.log(books[0]);


// iterating over an array
for (let m =0; m<noOfBooks; m++){
    console.log(books[m]);
}


// holes in an array
console.log("adding holes in an array and checking if they exist or not.");
books[15] = 'physics'
console.log(books);

// find book in an array
// let find HP2 book
console.log("here finding the HP2 book in books array.");
for(let i =0; i< books.length; i++){
    if(books[i] === 'HP2' ){
        console.log("HP2 books exists.");
    }
}

// find book in books from queries array. 
console.log("getting queries from input");
let noOfQueries = parseInt(readLine());
let queries = [];
for(let i = 0; i<noOfQueries; i++){
    queries[i] = readLine();
}
console.log(queries);
console.log("finding book in books from queries array");

for (let i=0; i<queries.length; i++){
    let query = queries[i];

    for (let j =0; j<books.length; j++){
        let book = books[j];
        (book === query)?console.log("Found "+query+" Books"):'';
        break;
    }
}