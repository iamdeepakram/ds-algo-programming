/**Lecture 13 */

/**
 * TRAVERSAL | SEARCH --> QUERYSELECTOR and QUERYSELECTORALL
 * QUERY SELECTOR --> RETURNS --> first occurance in form of OBJECT
 * query selecor all --> returns --> all occurance in form of ARRAY
 * --> getElementsByTagName --> multiple selector
 * --> getElementsByClass --> multiple 
 * --> 
 */ 

// Check todo folder for further code 
// Create element
// Store the reference to perform further operations
const captionEle =   document.createElement('caption', {id:'unique', class: 'classname'}); // Reference 
// <captiion></caption>

/// Updateing content or inner html

innerHTML, innerText, append, prepend 

// udpating attributes
setAttribute, 

// Fetch the container where this node need to be append


// Delete element

// modify element or its content





/**Lecture 12  */
// const para = document.querySelector(SELECTOR);
// SELECTOR -->(TAG NAME | CLASS NAME | ID | ATTRIBUTE)
alert(123);
// will give only one occurance of p
// const para = document.querySelector('p'); //--> tag selector
const para = document.querySelector('p.message'); //--> class selector
// will give all occurance of p
//const paragraphs = document.querySelectorAll('p'); // --> tag selector
const paragraphs = document.querySelectorAll('p.message'); //--> class selector
// Example of multiselector 
// query selector all
debugger;

console.log(para); // first p tag whole element
console.log(typeof para); // give object
console.log(paragraphs); // 
// querySelector --> will get the entire values inside section tag including tags, classes, id, attribute
/**Can pass different tags 
 * a
 * link
 * script
 * div
*/
const sectionContent = document.querySelector('section');

// innerHTML --> 
const sectionContentInnerHTML = document.querySelector('section').innerHTML;
// outerHTML 
const sectionContentOuterHTML = document.querySelector('section').outerHTML;
// children
const sectionContentChildren = document.querySelector('div').children;

setTimeout(()=>{
    alert(sectionContentChildren[1].innerHTML)
}, 2000);


/**What is enhanse mechanism? */

const messageNodes = document.getElementsByClassName('message'); 
// will return array [] with multiple values

// get the container
// Reference of html node
const dottedContainer = document.querySelector('.run-time-output');
// set container inner html to section children content
dottedContainer.innerHTML = sectionContentChildren[1].innerHTML;
// adding element to dotted container from 
// all message class nodes
for(let messageElement of messageNodes){
    dottedContainer.innerHTML += messageElement.innerHTML+'<br/>';
}
// set dotted container to empty string 
setTimeout(()=>{
    dottedContainer.innerHTML = '';
}, 5000);


// get all the companies from table first column
// using --> table tr td:first-child
const companies = document.querySelectorAll('table tr td:first-child');

const secondDottedContainer = document.querySelector('.run-time-output2');

for(let company of companies){
    secondDottedContainer.innerHTML += company.innerHTML+'<br/>';
}


// get all the countries from table last column
// using --> table tr td:last-child
const countries = document.querySelectorAll('table tr td:last-child');

for(let country of countries){
    secondDottedContainer.innerHTML += country.innerHTML+'<br/>';
}


// Create runtime element
// this create HTML Node
const caption = document.createElement('caption');

caption.innerHTML = 'This is table caption.';
document.querySelector('table').appendChild(caption);

// How to add serial number at start of table rows
/**
 * Take reference of where to add
 * create element and store ref of newly created ref
 * add relevant content
 * append to container reference which is created on step one
 */

// Prepend the S.No --> table head
document.querySelector('table tr:first-child').prepend(document.createElement('th').innerHTML='S.NO');
// createElement --> Only accepts TAG NAME

const rows = document.querySelectorAll('table tr');
let count = 0;
for(let row of rows){
    if(count ==0){
        count++;
        continue;
    }
    const serialNumber = document.createElement('td');
    serialNumber.innerText = count;
    serialNumber.setAttribute('class', 'serial-number');
    row.innerHTML = serialNumber.outerHTML+row.innerHTML;
    count++;
}