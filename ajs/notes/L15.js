//XML 
{/* <person>
    <name>Standard</name>
    <email>abc@xyz.com</email>
    <phone>8393938384</phone>
</person> */}

//JSON

var person = {
    name: 'Standard',
    email : 'abc@xyz.com',
    phone : 84848484848
}


// Fetch data 
const myAPIAddress = 'https://jsonplaceholder.typicode.com/posts';

// connect with api url
// fetch(myAPIAddress).then(response=>{
//     response.json().then(data=>{
//         console.log(data);

//     })
// })

/**PROMISE ASYNC */
const isPass = false;
// Data type of Success & Fail 
// is function both are function 
const myResultPromise = new Promise((success, fail)=>{
    // Code will go here
    if(isPass){
        const result = {
            message : 'Result is pass'
        };
        success(result)
    }
    else{
        const result = {
            message : 'Result is fail'
        };
        fail(result);
    }
})

myResultPromise.then(pass=>{
    console.log(pass.message);
}).catch(fail=>{
    console.log(fail.message);
})



let standard = 10;
const isPasss = true;
const updateClass = new Promise((resolve, reject)=>{
    if(isPasss){
        const result = {
            message : `Promoted to ${++standard}`
        };
        resolve(result);
    }else{
        const result = {
            message : ` Demoted to ${--standard}`
        };
        reject(result);
        
    }
})


updateClass.then(pass =>{
    console.log(pass.message)
}).catch(fails=>{
    console.log(fails.message)
})



/**ASYNC */

async function promiseSuccess(){
    const result = {
        message : `promoted - to ${++standard}`
    }
    return result;
}

async function promiseFail(){
    const result = {
        message : `Demoted  - to ${--standard}`
    } 
    throw new Error(result.message);
}


if(isPasss){
    promiseSuccess();
}else{
    promiseFail();
}