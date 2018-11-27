// Write a regex so that it will search
// for the string "good".Then update the replaceText variable to replace "good"
// with "okey-dokey".

let huhText = "This sandwich is good.";
let fixRegex = /good/; // Change this line
let replaceText = "okey-dokey"; // Change this line
let result = huhText.replace(fixRegex, replaceText);

// You can search and replace text in a string using.replace() on a string.The inputs
// for.replace() is first the regex pattern you want to search
// for.The second parameter is the string to replace the match or a
// function to do something.

// You can also access capture groups in the replacement string with dollar signs($).