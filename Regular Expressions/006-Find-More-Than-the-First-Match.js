// Using the regex starRegex, find and extract both "Twinkle" words from the string twinkleStar:

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line

// To search or extract a pattern more than once, you can use the g flag.
// You can have multiple flags on your regex like /search/gi