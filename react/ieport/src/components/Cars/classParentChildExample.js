// run it with node only in terminal

class Parent {
    parentPropsv1;
    parentPropsv2;
    constructor(v1, v2){
        this.parentPropsv1 = v1;
        this.parentPropsv2 = v2;
    }
}

class Child extends Parent{
    childPropsc1;
    constructor(v1, v2, c1){
        // super();
        super(v1, v2);
        this.childPropsc1 = c1; 

    }
}


let x = new Child('p1', 'p2', 'c1');
console.log(x);
// When super();
// output: 
// Child {
//     parentPropsv1: undefined,
//     parentPropsv2: undefined,
//     childPropsc1: 'c1'
//   }

// when super(v1, v2);
// output: 
// Child { parentPropsv1: 'p1', parentPropsv2: 'p2', childPropsc1: 'c1' }