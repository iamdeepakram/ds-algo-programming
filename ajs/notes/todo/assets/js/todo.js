// Create function expression

const myFunction = function(){

}

document.getElementById('addTodo').onclick = (e) =>{
    e.preventDefault(); // SUMBIT  // A TAG
    if(document.querySelector('.todo-text').value.trim().length == 0 ){
        alert('Please enter a task');
    }else {
        // Create todo 
        /** <div class="task" >
            <span id="taskname" >Sample todo</span><button class="delete" >Delete <i class="fa fa-trash-o"></i></button>
        </div> */
        createTodo(document.querySelector('.todo-text').value);
        
    }

}

function createTodo(todoText){
    const todosContainer = document.getElementById('tasks');
    const taskContainer = document.createElement('div');
    taskContainer.setAttribute('class', 'task');
    const valueEle = document.createElement('span');
    valueEle.setAttribute('class', 'taskname');

    
    const buttonEle = document.createElement('button');
    buttonEle.setAttribute('class', 'delete');
    buttonEle.innerHTML = '<i class="fa fa-trash-o">';
    valueEle.innerText = todoText;
    
    const completeButton = document.createElement('button');
    completeButton.setAttribute('class', 'complete');
    completeButton.innerHTML = 'DONE';
    
    taskContainer.append(valueEle);
    taskContainer.append(buttonEle);
    taskContainer.append(completeButton);
    todosContainer.append(taskContainer);

    document.querySelector('.todo-text').value = '';

    const current_task = document.querySelectorAll('.delete');
    for(let todoDelete of current_task){
        todoDelete.onclick = function(){
            this.parentNode.remove();
        }
    }


    // Set status to complete 
    var complete_button = document.querySelectorAll('.complete');
    for(let complete of complete_button){
        complete.onclick = function(){
            this.parentNode.style.background = 'green';
        }

        complete.ondblclick = function(){
            this.style.background = ' red';
            this.parentNode.style.background = '#c5e1e6';
        }
    }

}

function clearAllTodos(){
    document.querySelectorAll('.task').forEach(function(ele, index){
        document.getElementById('tasks').removeChild(ele);

    })
}
document.getElementById('deleteTodos').onclick = clearAllTodos;


// print something at runtime
document.querySelector('.todo-text').onkeyup = function(){
    document.querySelector('.runtime-todo').innerHTML = this.value;
}

// prevent default 
// something is having some default functionality in js 
// we can restrict that.

// used --> submit // Anchor tag

document.querySelector('#generateTodo').onclick = function (){
    document.querySelector('#tasks').innerHTML = '';
    // Simple fetch function
    // getTodoFromServer();
    // ASync fetch function 
    getApiData('https://jsonplaceholder.typicode.com/posts').then(data=>{

        for(let todo of data.splice(0,5)){
            createTodo(todo.title);
        }
    });
   
   
    // setTimeout(()=>{
    //     for(let i =0; i<10; i++){
    //         createTodo(`Hello todo number ${i}`);
    //     }

    // }, 5000);
}

/** Time out and Intervals
 * setTimeout
 * - it is a repetative function 
 * - it will execute a function after given time only once
 * setInterval 
 * - it is not a repetative function 
 * - it will execute a function after every given interval or time 
 * are the async functionalities
 */



// setTimeout(handlerFunction, duration);


function sayHello(){
    console.log('Hello from set time out.');
}
const timeout = setInterval(sayHello, 5000);

// If want to stop timeout in 3 seconds
setTimeout(()=>{
    console.log(`time out clear in 3 seconds.`);
    clearTimeout(timeout);
}, 3000);


/**Create a digital clock */

let seconds = 0;
function printSeconds(){
    seconds++;
    console.log(`Seconds Completed : ${seconds}`);

    if(seconds === 10){
        clearInterval(interval);
    }
}

const interval = setInterval(printSeconds, 1000);

// callback function 
// sayHello and printSeconds is the call back function above.

// Call back function example

function doHomework(assignmentNumber, callback){
    console.log(`Started assignment number : ${assignmentNumber}`);

    // finish assignment after 5 seconds
    setTimeout(()=>{
        callback(5);
    }, 5000);
}

function finished(seconds){
    console.log(`Assignment finished in ${seconds} seconds `);
}

doHomework(2, finished);


// Fetch js method
// Fetch data 
const myAPIAddress = 'https://jsonplaceholder.typicode.com/posts';

// connect with api url
fetch(myAPIAddress).then(response=>{
    response.json().then(data=>{
        console.log(data);

    })
})




// Fetch funciton
function getTodoFromServer(){
    // connect with api url
    fetch(myAPIAddress).then(response=>{
        response.json().then(data=>{
            for(let todo of data.splice(0,5) ){
                console.log(createTodo(todo.title));
            }

        })
    }).catch(fail =>{
        console.log('Request failed '+ fail.message)
    })
}
/**ASYNC FUNCTION */

async function getApiData(url){
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error.message)
    }

}

// It takes collection of promise in single shot
//Promise.all(getNotification(), getMessage(),getPost())