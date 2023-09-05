/**Operators and Intro to ES 6 */

const employee = { // this always refers to object
    'empid': 12345,
    'empname' : 'John Doe', 
    'age' : 35,
    'address': {
        'street' : '10th lane', 
        'building' : 'XYZ Apartment', 
        'landmark' : 'Near ABC Studio',
        'pincode' : 102020
    },
    'printDetails' : function(){
        console.log(`${this.empid}------>${this.empname}`);
    },
    
}

// getDetails --> EMPID + NAME
employee["getDetails"] = function() {
    console.log(`empid ${this.empid}|| name ${this.empname}`);
}
employee.getDetails();
/**
 * let's perform some operation on employee object
 * we will add 0 at start of every value in employee object
 * why are we writing object because employee is object in this case
 * Below method will work for all object in js
*/ 
Object.prototype.AddPrecedingZero = function (){
    // this --> employee 
    for(let i in this){
        this[i] = "0"+this[i];
    }
    return this;
}
// console.log(employee.AddPrecedingZero());

// Define property for obejct
// Object.defineProperty(SourceOBJECT, PROPERTY, VALUE);

Object.defineProperty(employee, 'getDetails', {
    value : function(){
        return `${this.empid}------> ${this.name}`;
    }
});

console.log(employee.getDetails());

// console.log(this === window);


// console.log(academyName); //is not defined
function getName(){
    var academyName = 'Prabhat'; // in functional scope 
    // hoisting inside function
    console.log(academyName); // Prabhat
}

getName();
// console.log(academyName);// is not defined

/**Bind method --> always return a function 
.bind(object)*/

/** will work on client side */
//window.empid = 4939939;
//window.empname = 'Jane Doe'
//var myEmployeeDetails = employee.printDetails; // this point is global
//myEmployeeDetails(); // undefined ----------> undefined


/** Error handling */
try{
    console.log(x);
}catch(error){
    console.log(error.message);

}
const anotherEmployeeDetails = {
    'empid': 938404,
    'empname' : 'Anthony Mackie'
}

var myEmployeeDetails = employee.printDetails; // this point is global
employee.printDetails.bind(employee)(); // 12345------>John Doe
myEmployeeDetails.bind(anotherEmployeeDetails)(); //  938404------>Anthony Mackie


/**Another Example */
var car = {
    'brand' : 'AUDI',
    'registration' : 8943493,
    'displayDetails' : function(name){
        console.log(`This ${this.brand} car belongs to ${name} with registration of ${this.registration}`);
    }
}

car.displayDetails('Sanjay');

var maxCarDetails = {
    'brand' : 'BMW',
    'registration' : 9489843,
}
var getMaxCarDetails = car.displayDetails.bind(maxCarDetails)('Falcon');
var getMaxCarDetails = car.displayDetails.bind(maxCarDetails, 'Falcon j');
getMaxCarDetails();

function displayDetails(name, lname){
    console.log(`This ${this.brand} car belongs to ${name} ${lname} with registration of ${this.registration}`);
}

/**.apply()
 * displayDetails.apply(SOURCEOBJECT, [PARAM1, PARAM2]);
 * return type --> void (it does not return anything)
 */
displayDetails.apply(car, ['Max']);  // -->takes array for parameter
displayDetails.apply(maxCarDetails, ['Max', 'Johnson']);

/**.call()
 * displayDetails.call(SOURCEOBJECT, PARAM1, PARAM2)
 * retun type --> void (it does not return anything)
*/

/**diff between apply and call is apply requires array of parameters 
 * in call we directly pass parameters
*/
displayDetails.call(maxCarDetails, 'Twisted', 'Metal');


/** Advantage & Disadvantages  */

/** Error handling */
try{
    console.log(x);
}catch(error){
    console.log(error.message);
}finally{ // it will log the error in some sort of file

}
// Debug the js code 
debugger; // will work on browser 


// Access parameter without using parameters name in function 

function sum(a, b, c, d ,e ,f , g){
    // using via arguments
    console.log(arguments);
}
// Arguments 
//--> can not access in arrow function 
sum(1,2,3,4,5,6,7);

/**REST PARAMTER */
// pass as much arguments as you want we call it rest parameter
var som = function (...myArguments){
    return myArguments.reduce((accumulator, current) => accumulator+current);
}
console.log(som(1,2,5,6,7,8,9,0))


var studentsRank = ['deepak', 'sam', 'will', 'smith', 'larry', 'sergie']
const [winner, runnerup, ...participants] = studentsRank;
console.log(winner, runnerup, participants);


// Swap variables
var a = 4;
var b = 7;
var [a,b] = [b,a];
console.log(a,b);
