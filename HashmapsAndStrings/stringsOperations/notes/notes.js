// String length 
let nn = 'Deepak';
//Property
// Length
console.log(nn.length); // print the lenght of string
// charAt -> pass always number
// D-> 0, e->1, e->2, p->3, a->4, k->5
console.log(nn.charAt(4)); // a
console.log(nn.charAt(-1)); // ' ' --> empty string
console.log(nn.charAt(nn.length-1)); // k

// substring(start, end(default value will be end of string)) --> returns the string from index start to end
// of the string, 
console.log(nn.substring(4)) // ak

// substring(start, end(default value will be end of string)) --> returns the string from index
// start to end -1, 
console.log(nn.substring(3,5)) // pa --> upto 5 but not including 5
console.log(nn.substring(5,0)) // convert this to below 
console.log(nn.substring(0,5)) // 


// concat --> takes array of string and concatnate it
console.log(nn.concat(' Ram', ' Sutrakar'));

// indexOf --> returns first occurance of give string
console.log(nn.indexOf('p')); // 3 
console.log(nn.indexOf('epak')); // 2 
console.log(nn.indexOf('raj')); // -1 --> because it doesn't exist in string
// it will start searching from 5th index
console.log(nn.indexOf('p', 5)); // -1 
console.log(nn.indexOf('p', 3)); // 3
// indexOf(sub string, number)  --> returns the position of the first occurrence of a substring
// scanning of string starts at given number index
// It will search for e after getting first e position
// De
let first_e_pos = nn.indexOf('e');
// epak --> find the first e start from index 2
console.log(nn.indexOf('e', first_e_pos+1));

// toUpperCase --> does not change the original string 
// take value and return the uppercased value and does not change it.
console.log(nn.toUpperCase());
// change permanently string 
let testname = 'somehtingishere';
testname = testname.toUpperCase();
console.log(testname);

// toLowerCase
console.log(nn.toLowerCase());

// trim --> removes the white spaces from around the string and return it 
// it does not change the original string
let trimex = ' djflkdjfd ';
console.log(trimex.trim());

// My name is "Deepak"
console.log("My name is \"Deepak\"");
console.log("My name is \\Deepak\\");

// new line
console.log('test is here \ndeepak');

// new tab 
console.log("my name is \tjigyasa");
console.log("my name is \tjigyasa".length);

// vertical tab \v
console.log("My name is \vJigyasa");