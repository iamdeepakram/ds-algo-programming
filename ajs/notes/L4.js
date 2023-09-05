// Till now studied
/**
 * Primitive Data type 
 * integer, string, boolean, undefined, null
 * Non primitive data type
 * array, objects, functions
 * 
 * loop 
 * initialization, condition, increment
 * for loop
 * while loop
 * do while loop --> it executes condition at least one time
 * break --> terminate the loop
 * continue --> jump/skip to the current iteration
 */

// Create infinite loop
for(let i=1; i>0; i++){
break;
}
while(true){
break;
}
do{
    break;

}while(true){
};

/**
 * Switch cases
 */
var num = 5;
var str = '5';
console.log(num == str); //Equality operator == only checks the data
console.log(num === str); //Strick equality operator === checks data and data type

var truthyValue = true;
console.log(`Truty value ${truthyValue}`);
truthyValue = !truthyValue;
console.log(`Truty value ${truthyValue}`);
// valid --> string, integer, boolean
// invalid --> space and undefined
var arr = [1,2,3,4,'5',6,7,'8',9,,,,];

// != --> Inequality operator
// !== --> Strict inequality operator
//&& --> and
for(let i=0; i<arr.length; i++){

    if(arr[i]){
        console.log('henlo');
    }
    if(arr[i]!= 5 && arr[i]!= 8){ // false && true --> false
        console.log(arr[i]);
    }
    if(arr[i]!== 5 && arr[i]!== 8){ // false && true --> false
        console.log(arr[i]);
    }
}
// || --> or
for(let i=0; i<arr.length; i++){
    if(arr[i]!= 5 || arr[i]!= 8){ // false || true --> true
        console.log(arr[i]);
    }
}

// ternary operator
var isSeptember = true;

var message = isSeptember?`It's Septmeber`:'Not a september';
console.log(message);



//-------------------- Switch Cases ---------------------//

function getFruitsByColor(color){
    switch(color.toLowerCase()){
        case 'red':
            return 'apple';
        case 'orange':
            return 'orange';
        case 'yellow':
            return 'banana';
        case 'green':
            return 'kiwi, grapes, jackfruit';
        default:
            return "Please provide valid fruit color name";

    }
}

console.log(getFruitsByColor('brown'));
console.log(getFruitsByColor('ORANGE'));    
// Function Declaration --> It can be hosted
sayHello(); // --> calling function

function sayHello(){ // Declaration + definition
    console.log("Hello from earth")
}
sayHello(); // --> calling function

// Function expression 
//sayAnotherHello(); // error --> not a function because till now it is not defined as function
var sayAnotherHello = function(){
    console.log("Hello another world.");
}
// that type of function is called anonymous function because it does not have a name
console.log(typeof sayAnotherHello);

console.log(svar);
//console.log(simpleConst); // error 
//console.log(simpleLet); // error
var svar = "simple var";
const simpleConst = 'SimpleConst';
let simpleLet = 'simpleLet';