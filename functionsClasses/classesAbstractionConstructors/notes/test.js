function Test(name, age){
    this.name = name;
    this.age = age;
    // access is not binded for public access 
    let x = 200;
    function print2(){
        console.log(this.name); // undefined
    }
    this.print1 = function(){
        // no object is invoking this print2 function
        print2();
        console.log(this.name); // this.name --> test.name
    }
}

let test = new Test('deepak', 78); //{name: 'deepak', age : 78, print2 : function() {}}
console.log(test.name, test.x);

test.print1();
// there is no property which is binding
// test.print2(); // undefined
