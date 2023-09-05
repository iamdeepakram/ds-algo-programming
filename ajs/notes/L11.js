/**Revision */
// What is shallow copy?
let simpleObj = {
    'key1':1,
    'key2':2
}
let newObj = simpleObj; // Create shared memory address;
// They share same address of object
// 

// What is deep copy?
let anotherObj  = {...simpleObj};
// It is creating the new object using given object 
// It stores fresh copy


// Test it

simpleObj.key1 = 5;
anotherObj.key1 = 10;

simpleObj.key1; // 5
newObj.key1 // 5
anotherObj.key1 // 10

/**Till now studied
 * JS Basics
 * Js Datatypes
 * JS Variable (var, let , const)
 * ParseInt
 * Dynamic typing --> dynamic data type assignment at runtime --> Ex. -> var a;
 * Control flow --> If, elseif, else
 * Swith Case 
 * For, While, Do While
 * Infinite loop
 * Break and continue 
 * Ternary Operator 
 */

/**Array 
 * Array creation , access, reassign
 * finding element
 * push, pop, shift, unshift
 * combining(concat, spread)
 * splitting joining
 *  sorting, filter, map, reduce, foreach, for of , reverse
 * lastOf, indexOf, replace, replaceall
 */
/**OOPS
 * function (declaration, expression)
 * pass by value, pass by reference
 * mutability and immutabiliyt
 * classes
 * object (Instance)
 * inheritance(prototype)
 * abstraction
 * encapsulation
 * poly 
 * setter gettter
 * template literal
 * design patterns
 */

/** Function scope
 * Function (declaration, expression)
 * Hoising
 * argument
 * Rest parameters
 * DEFAULT PARAMTERS
 * GLOBAL SCOPE , FUNCTION SCOPE, BLOCK/LEXICAL SCOPE
 * CALL, APPLY, BIND, 
 * SUPER CONSTRUCTOR 
*/
var sum=(a,b,c,d,e,f)=>{
// console.log(arguments);
//arguments are not supported in arrow functions
}
sum(1,2,3,4,5,6,7);

// Default example
const printMessage = (mood = 'Happy')=>{
    return `Sanjay mood is ${mood}`;
} 
console.log(printMessage('Jolly'));

const jodo = (a=0, b=0)=>{
    return a+b;
}
console.log(jodo());


/**
 * OBJECT (DATA TYPE)
 * CREATE , REASSIGN, REINIT, ACCESS
 * FOR IN
 * DESTRUCTURING 
 * KEYS, VALUES, ENTITIES, HASOWNPROPERTY, DEFINEPROPERTY
 * 
 */

// var objj = {};
// Object.defineProperty(SOURCEOBJECT, KEYNAME, {
//     value : VALUE
// })

/**Intro to DOM */
