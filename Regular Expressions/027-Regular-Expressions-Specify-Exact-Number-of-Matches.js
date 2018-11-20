// Change the regex timRegex to match the word "Timber"
// only when it has four letter m 's.

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);

// To specify a certain number of patterns, just have that one number between the curly brackets.

// For example, to match only the word "hah"
// with the letter a 3 times, your regex would be / ha{3}h / .