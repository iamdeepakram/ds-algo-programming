let arr = [];

// 1) Factory functions
// It manufactures the object that we needed that is why we call it a factory function.
function generateStudent(firstName, lastName, age){
    return {
        name: {
            firstName : firstName,
            lastName : lastName
        },
        age : age
    }
}

let student1 = generateStudent('deepak', 'sutrakar', 32);

// 2) Use a constructor function

function generateStudentWithConstructor(f, l, a){
    this.firstName = f;
    this.lastName = l;
    this.age = a;
    // methods
    this.printDetails = function(){
        console.log(this.firstName, this.lastName, this.age);
    }
}

let studentC = new generateStudentWithConstructor('deepak', 'sutrakar', 44);
console.log(studentC.firstName);
studentC.printDetails();


let narr = [1,2,3];
// let narr = new Array();
// Array Attributes
console.log(narr.length);
// Array Method
narr.push(100);



/**
 * BP Problem Solution Approach with added constraints are following:
 * 
 * Health Check:
 * 1 ) BP Check
 * 2 ) Blood test Report (rbc count < 10 || wbc <20 --> not safe , other wise safe)
 * 
 * Cardiac Test
 * 1) BP test
 * 2) Sugar test (hemoglobin < 10 --> sugar patient otherwise no sugar)
 */

class BPRecord {
    constructor(sys,  dia, rbc, wbc, hemoglobin){
        this.sys = sys;
        this.dia = dia;
        this.rbc = rbc;
        this.wbc = wbc;
        this.hemoglobin = hemoglobin;
        // here we are hiding the function from public access
        let BPCheck = function(sys, dia){

            console.log('Blodd Pressure is '+sys+'/'+dia);
            // this.sys --> undefined because global invoked it.
            // there is not global object which is refering to this.sys
            // but sys --> refers to local function value 
            if(sys > 140 || dia >90){
                console.log('High BP');
            } else if (sys < 90 || dia < 60){
                console.log('Low BP');
            } else {
                console.log('Normal BP');
            }
            
        }
        let BloodReport = function (rbc, wbc){
            if (rbc < 10 || wbc < 20 ){
                console.log("Person is not safe");
            }else {
                console.log("Person is safe");
            }
        }
        let sugarTest = function (hemoglobin){
            if (hemoglobin < 10){
                console.log("Sugar patient");
            } else {
                console.log("No Sugar");
            }
        }
        this.healthCheck = function (){
            // refers to global
            // we are able to access variable here 
            console.log(this.sys);
            // we are bot pssing any parameter to bp check
            BPCheck(this.sys, this.dia);
            BloodReport(this.rbc, this.wbc);
        }
        this.cardiacTest = function (){
            BPCheck(this.sys, this.dia);
            sugarTest(this.hemoglobin);
        }


    } 

}
let patient1 = new BPRecord(160, 30, 9, 200, 12); 
// {sys: 160, dia: 30, rbc : 9, wbc : 200, hemo : 12, hl : function(){}, ct : function(){}}
patient1.healthCheck();
// patient1.cardiacTest();

/**
 * Let's solve above BP Record with constructor function
 */
// constructor function 
function BPPRecord(sys, dia){
    this.systolic = sys;
    this.diastollic = dia;
    this.generateReport = function () {

    }
}



