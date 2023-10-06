// Static Method

class User{
    constructor(name1){
        this.name1 = name1;
    }

    static getUser(x){
        return 'Hello ' + x;
        // return 'Hello ' + x.name1;
    }
}


let object = new User('John');
//object.getUser();//TypeError: object.getUser is not a function

// console.log(User.getUser()); // Hello
// if getUser(x) return is x.name1;
// console.log(User.getUser(object)); // Hello John
// If getUser(x) return is x;
console.log(User.getUser('Jane')); // Hello Jane



/**Global Scope */
// can be accessed from anywhere 
let global = 'John';

function functionOne(){
    return global;
}


function functionTwo(){
    return functionOne();
}

console.log(functionTwo()); // John


/**Local / function scope */


function localFunction(){
    let a =2;
    // multiply has local scope
    let multiply = function(){
        console.log(a*5);
    }
    multiply();
}

console.log(localFunction()); // 10
// console.log(a); // ReferenceError : a is not defined




/**Block Scope */
{
    let z = 5;
}
//console.log(z); // ReferenceError : z is not defined


/**Scope Chain */

let scGlobalVar = 12;
function func1(){
    scGlobalVar = 11;
    let localVar = 3;
    let nestedFunction = function(){
        console.log(localVar);
    }
    let nestedFunctionTwo = function(){
        console.log(scGlobalVar);
    }
    nestedFunction();
    nestedFunctionTwo();
}
function func2(){
    console.log(scGlobalVar);
}

func1();
func2();


/**Closures */

// This is how we return a function 
function testFunc(){
    let localVar = 3;
    let nestedFunc = function(){
        console.log(localVar);
    }
    return nestedFunc;
}

let funcCall = testFunc();
console.log(funcCall); // [Function : nestedFunc] --> returns the function definition
// To print 3 
funcCall(); // 3


// Closure examples
// example 1
function greet(){
    let name = 'John';
    function displayName(){
        return 'Hi ' + name;
    }
    return displayName;
}

let g1 = greet();
console.log(g1); // [Function : displayName] --> returns the function definition
console.log(g1()); // Hi John

// example 2  --> Below code has a lexical environment
function calculate(x){
    function multiply(y){
        return x*y;
    }
    return multiply;
}
// Below both of them are closures
let multiply1 = calculate(3);
let multiply2 = calculate(4);

console.log(multiply1); // [Function : multiply] --> function definition
console.log(multiply1()); // NaN  --> 3*NaN
console.log(multiply1(6)); // 18 --> 3*6
console.log(multiply2(2)); // 8  --> 2*4

// example 3

// let a = 0;
function sum(){
    let a = 0;
    function incSum(){
        return a = a+1;
    }
    return incSum;
}

let x = sum();
let a = 5;
console.log(x());//1
console.log(x());//2
console.log(x());//3
//a = a+1;
console.log(a);//4 | 5


// example 4
function sum4(){
    function incSum(){
        let a = 0;
        return a = a+1;
    }
    return incSum;
}

let x4 = sum4();
let a4 = 5;
console.log(x4());//1
console.log(x4());//2
console.log(x4());//3
//a = a+1;
console.log(a4);//4 | 5
