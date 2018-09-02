// import { function } from "file_path_goes_here"
// // We can also import variables the same way!
// In most cases, the file path requires a ./ before it; otherwise, node will look in the node_modules directory first trying to load it as a dependency.



// Add the appropriate import statement that will allow the current file to use the capitalizeString function. The file where this function lives is called "string_functions", and it is in the same directory as the current file.

"use strict";

import { capitalizeString } from "string_functions";

capitalizeString("hello!");