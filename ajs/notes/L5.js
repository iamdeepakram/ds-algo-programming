var city = ['Delhi', 'New York', 'Punjab', 'Indore', 'Bangalore'];
// approaches to get city name one at a time
for(let i=0; i<city.length; i++){
    console.log(city[i]);
}
// For of loop --> print the value in city
// Best for iterating array
console.log("for of loop");
for(let element of city){
    console.log(element);
}
// For in loop  --> print the index in city array
console.log("for in loop");
for(let i in city){
    console.log(i);
}
const obj = {
    a:10,
    b:20,
    c:30,
    d:40
}
// For in loop  --> print the key in obj
// Best for iterating object
console.log("for in loop for object");
for(let key in obj){
    console.log(key);
    console.log(obj[key]);
    console.log(obj.key); // throw undefined because key is a string type
}
console.log(obj.a); // we can access directly.

//------- Array
// Example of pass by reference 
const arr = [1, 'one', 2, 'two', 3, 'Three', 4, 'Four'];
const newArr = arr;

newArr[3] = 'Some Value';
console.log(arr[3]);
console.log(newArr[3]);

const integerArr = [40, 50, 6, 40, 9, 20];

// SORT Array
console.log(integerArr.sort()); // [ 20, 40, 40, 50, 6, 9 ]
/**
 * Why this output : [ 20, 40, 40, 50, 6, 9 ]
 * Because .sort() is sorting in ASCII manner
 * how it is sorting that --> because of function callback()
 */

// Below technique is insertion sort and quick sort technique
const sortedArr = integerArr.sort(function(current, next){ // curr -> 40, next ->50, arr -> [20,]
    return current-next;

});
console.log(sortedArr);
// Example 
const alphaArr = ['z', 'p', 'a', 'y', 'm', 'c'];
/** why this [ 'a', 'c', 'm', 'p', 'y', 'z' ]
 * Because .sort() is sorting in ASCII manner
 * how it is sorting that --> because of function callback()
*/
// Below technique is insertion sort and quick sort technique
// But it doesn't work on characters 
const sortedCharArr = alphaArr.sort(function(current, next){
    return current-next;
    
});
console.log(sortedCharArr);
console.log(alphaArr.sort()); // [ 'a', 'c', 'm', 'p', 'y', 'z' ]

/**
 * So after seeing both the sorting on characters and integers 
 * we can say that 
 * we can use extended sort function on integers and not on character 
 * we can use simple sort function on characters
 */


