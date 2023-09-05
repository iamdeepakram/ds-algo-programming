
/**
 * I can imagine that in a document there is a paragraph which 
 * Paragraph:
 * Curabitur auctor efficitur mi, pellentesque mollis nisl
 * efficitur et. Nulla facilisi. Mauris vitae mauris pretium 
 * 
 * Suppose above paragraph is given to us as array.
 * 
 * ["Curabitur", "auctor", "efficitur",  "mi", "pellentesque", "mollis", "nisl",
 * efficitur et. Nulla facilisi. Mauris vitae mauris pretium.]
 * 
 * Input: 
 * 
*/
/**
 * Problem: Given an arrya of strings, and a number (maxWidth), 
 * format the text such that every line has 
 * exactly maxwidth characters and is both right and left aligned
 */

// Input: 
// 1. Array of Strings/words:
// 2. A number/maxWidth:

// Output: Sentence printed on console with right and left justification

// Sample: ["This", "is", "an", "example", "of", "text", "justification."] 
// maxWidth = 16
// This is an      
//example of text
// justification.

// Sample: ['What', 'must', 'be', 'acknowledgement', 'shall', 'be.']
// maxWidth = 16
//What must be 
//acknowledgment
//shall be.


let nme = "anything is the string.";
console.log(nme);
// Length is a property of string not a method 
console.log(nme.length);

// 1) Template 

let nze = 'deepak';
let location = 'indore';
// Hello, <name> from <city>. how are you

let message = 'Hello, ' + nze+' from ' + location + ", how are you?";
console.log(message);
// above method is kind of works but is not that good 
// The right approach is using 
// 1.backtick 

let messageA = `Hello, ${nze} from ${location}, how are you?`;
console.log(messageA);

// 2. multi line strings 
console.log('string text line 1 \n'+
'string text line 2');
//with backtick
console.log(`String text line 1 with back tick.
String text line 2 with back tick`);

let a = 5;
let b = 10;
console.log('Fifteen is the ' + (a+b) + ' and \nnot the ' + (2*a+b)+ '.');
console.log(`Fifteen is the ${a+b} and 
not the ${2*a+b}.`);