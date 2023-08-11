function Test(){
    this.name = 'Deepak';
    this.age = 22;
    this.printDetails = function (){
        console.log(this.name, this.age);
    }

}
let t = new Test();
t.printDetails();


function Test1(name){
    console.log(this, name);
}
Test1(); // this refers to global object 
Test1.call({email : 'd@g.com'}, 'deepak');  // invokation of test1 function 
// this is refering to email which is passed in call method

