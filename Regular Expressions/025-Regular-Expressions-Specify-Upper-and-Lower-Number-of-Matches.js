// Change the regex ohRegex to match only 3 to 6 letter h 's in the word "Oh no"

let ohStr = "Ohhh no";
let ohRegex = /oh{3,6}\sno/i; // Change this line
let result = ohRegex.test(ohStr);

// You can specify the lower and upper number of patterns with quantity specifiers.Quantity specifiers are used with curly brackets({ and }).You put two numbers between the curly brackets - for the lower and upper number of patterns.

// For example, to match only the letter a appearing between 3 and 5 times in the string "ah", your regex would be / a{ 3, 5 } h /.