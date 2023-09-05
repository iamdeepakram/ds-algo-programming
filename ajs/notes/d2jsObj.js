
// obj name = new instance of class
const numObj = new Number();// Default value --> 0
const strObj = new String(); // ''
const boolObj = new Boolean();// false

console.log(`Number value: ${numObj}, String value: ${strObj}, Boolean Value: ${boolObj}`);

// Data type is determine at runtime.
const svariable = 123;
const strvar = 'DRS';
const boolVar = true;
console.log(typeof svariable);
console.log(typeof strvar);
console.log(typeof boolVar);
const binvaryVal = 0000123; // return 83 --> means 
console.log(binvaryVal);
console.log(new Number("000"+123));
// console.log(parseInt(value, type of conversion))
console.log(parseInt("000"+123, 2)); //second param is binary 2 --> output --> 1
console.log(parseInt("000"+123, 10)); //second param is decimal 10 --> output --> 123
console.log(parseInt("000"+123, 8)); // second param is octal 8 --> output --> 83
console.log(parseInt("000"+123, 16)); // second param is hexadecimal 16 --> output --> 291


// Array 
const arr = [98,3,393,38,302,93];
// not recommandable array
const multipleDataTypes = [98,'string', true];
const arr2 = new Array(4);
console.log(arr);
console.log(arr2);
console.log(arr2.length);
arr2[100] = 1008;
console.log(arr2.length);

// Objects

let myObj = new Object();
let carObj = {
    'colour': ['red', 'blue', 'black', 'grey'],
    'brand': 'BMW',
    'gears': 5,
    'price': 10000000,
    'lights' : {
        'backlight': 'red', 
        'frontlight': ['led', 'foglamp']
    },
    'move' : function(gearNumber){

    }
};
console.log(carObj);
console.log(carObj.lights);


// Loops 
// Initializtion --> condition --> Iteration (Increment / Decrement)

// Create Boundary 
for(let i=0; i<5; i++){
    console.log(i);
}
// also call it Block scope
//console.log(i); // thows error becaue i is not accessible out of loop

for(var z=0;z<5; z++){
    console.log(z);
}
console.log(z); // z is accessible out of loop 
// That represent memory leak that is why we don't use var

// Traversing array from tail
for(let i=arr.length-1;i>0; i--){
    console.log(arr[i]);
}

// PreIncrement
var x =0;
console.log(++x);
// Post Increment 
console.log(x++);
// Decrement 
x--;
// While loop
let h = 1;
while(h<=10){
    console.log(h);
    h++
}

// Do while loop
// when you want to run a loop aleast once we create do while loop
// that is the difference 
let burgers = 100;
do {
    console.log(`Completer with ${burgers} burgers, I can eat`)
    burgers = burgers -10;
}while(burgers>0){
    console.log(`My burgers are gone`)
}


// for loop 

let mixArr = [1, 'One', 2, 'Two', 3, 'Three', 4, 'Four'];
// how we can jump over the element
for(let j=0; j<mixArr.length; j++){
    // return boolean
    if(typeof mixArr[j] == 'string'){
        continue;
    }
    console.log(mixArr[j]);
}