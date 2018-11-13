// Use the shorthand character class
// for non - digits\ D to count how many non - digits are in movie titles.

let numString = "Your sandwich will be $5.00";
let noNumRegex = /\D/g; // Change this line
let result = numString.match(noNumRegex).length;

// The shortcut to look
// for non - digit characters is\ D.This is equal to the character class[ ^ 0 - 9], which looks
// for a single character that is not a number between zero and nine.