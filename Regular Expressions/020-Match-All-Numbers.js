// Use the shorthand character class\ d to count how many digits are in movie titles.Written out numbers("six" instead of 6) do not count.


let numString = "Your sandwich will be $5.00";
let numRegex = /[\d]/; // Change this line
let result = numString.match(numRegex).length;


// The shortcut to look
// for digit characters is\ d, with a lowercase d.This is equal to the character class[0 - 9], which looks
// for a single character of any number between zero and nine.