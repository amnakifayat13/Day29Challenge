"use strict";
/* Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code"
within any given string and returns its position.*/
function codeFunc(str) {
    return str.indexOf("code");
}
console.log(codeFunc("we are learning typeScript code"));
// another example:
function findcodeFunc(str) {
    return str.indexOf("best");
}
console.log(findcodeFunc("Honesty is the best Policy"));
