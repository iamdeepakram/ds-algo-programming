// Lexical environments

let namee = 'Jane';

function first(){
    let lastName = 'Doe';
    namee = 'Janson'
    console.log(lastName); //--> lastName is only available in lexical env of first
    second();  //--> second has a access to first lexical environment
}

function second(){
    let age = 35;
    console.log(age);
    third();
}

function third(){
    let gender = 'female';
    console.log(namee, gender); 
}

first();

// every function has a lexical environment of its own
// function in itself is a lexical environment