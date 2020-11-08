// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long and have two consecutive digits.

let sampleWord = "astronaut";
let pwRegex = /(?=[a-zA-Z]{3,})(?=\D*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);

// Lookaheads are patterns that tell JavaScript to look - ahead in your string to check
// for patterns further along.This can be useful when you want to search
// for multiple patterns over the same string.

// There are two kinds of lookaheads: positive lookahead and negative lookahead.

// A positive lookahead will look to make sure the element in the search pattern is there, but won 't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

// On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there.A negative lookahead is used as( ? !...) where the...is the pattern that you do not want to be there.The rest of the pattern is returned
//     if
// the negative lookahead part is not present.