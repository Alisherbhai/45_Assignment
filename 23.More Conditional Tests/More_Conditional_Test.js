"use strict";
//Tests for equality with strings.
console.log(" equality Test string:", "Apple" === "Apple");
//Tests for Inequality with strings.
console.log("Inequality Test string:", "Apple" != "Orange");
// Tests using the lower case function.
console.log("lower case Function Test :", 'Hi'.toLowerCase() === 'hi');
// Numerical tests involving equality and inequality.
console.log("Numerical equality Test :", 10 == 10);
// greater than and less than.
console.log("Greater than Test :", 10 > 5);
// greater than and less than.
console.log("less than Test :", 10 < 20);
//Tests using "and" and "or" operators.
console.log("And Function Test :", 5 != 7 && 10 === 10);
//Used "or" operators.
console.log("or operator Test :", 'Hello'.toUpperCase() != 'hello' || 5 > 10);
// Test whether an item is in a array.
const syllabus = ['English', 'Math', 'Urdu'];
console.log('Test English in a array', syllabus.includes('English'));
//Test whether an item is not in a array. 
console.log('Test physics is not in  array :', !syllabus.includes('physics'));
