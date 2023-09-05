let arr = [1,1,2,2,2,2,3,3,4,4,4,4,4,5,5,5,5,5,6,7,7];
let newArray = [];

for (let i =0; i < arr.length; i++){
    if(newArray[newArray.length-1] == arr[i] ){
        // same element exists don't do anything

    }else{
        newArray.push(arr[i]);
    } 
}
console.log(newArray);