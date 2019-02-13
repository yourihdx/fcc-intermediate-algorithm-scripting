// Fill in the body of the add function so it uses currying to add parameters x, y, and z.

function add(x) {
    // Add your code below this line
    return function (y) {
        return function (z) {
            return z + y + x;
        }
    }

    // Add your code above this line
}
add(10)(20)(30);


/*

The arity of a function is the number of arguments it requires.Currying a function means to convert a function of N arity into N functions of arity 1.

In other words, it restructures a function so it takes one argument, then returns another
function that takes the next argument, and so on.

*/