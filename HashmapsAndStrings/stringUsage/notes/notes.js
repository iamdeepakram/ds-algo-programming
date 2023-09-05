let my_name = 'Sanjaytiwari';
console.log(my_name); // n
// String are immutability 
// something that can't be changed.
my_name[2] = 'z';

let a = b = 'John';
a = 'Finder';
console.log("a = "+a);
console.log("b = "+b);

// String are case sensitive
let str1 = 'a';
let str2 = "a";
let str3 = "A";
console.log('Str1 and str2 are equal '+ (str1 == str2));
console.log('Str1 and str3 are equal '+ (str1 == str3));

// String comparison method --> localeCompare returns 0 if strings are same
let different_name = 'Sanjaytiwari';
console.log("my_name and different+name are equal "+ my_name.localeCompare(different_name));
// if comparison is false --> 1
// if comparison is true --> 0
// \ --> use it to break the string to make string more readable
let multi_line_string = 'Deepak is \
having a lecture';
console.log(multi_line_string);

