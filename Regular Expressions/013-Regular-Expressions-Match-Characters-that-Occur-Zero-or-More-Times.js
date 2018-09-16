// Create a regex chewieRegex that uses the * character to match all the upper and lower "a"
// characters in chewieQuote.Your regex does not need flags, and it should not match any of the other quotes.

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
let result = chewieQuote.match(chewieRegex);

// There 's also an option that matches characters that occur zero or more times.

// The character to do this is the asterisk or star: * .