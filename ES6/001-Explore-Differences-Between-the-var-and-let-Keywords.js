// Update the code so it only uses the let keyword.
// using 'use strict' declaration in the beginning of the code throws an error if the variable not declared

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();