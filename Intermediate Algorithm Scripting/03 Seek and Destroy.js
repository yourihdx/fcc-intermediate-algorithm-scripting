/*

You will be provided with an initial array(the first argument in the destroyer function), followed by one or more arguments.Remove all elements from the initial array that are of the same value as these arguments.

Note You have to use the arguments object.

Remember to use Read - Search - Ask if you get stuck.Write your own code.

*/

function destroyer(arr) {
    // Remove all the values
    var newArr = [];
    var diffArr = [];

    for (let i = 1; i < arguments.length; i++) {
        diffArr.push(arguments[i]);
    };

    newArr = arguments[0].filter(function (element) {
            return diffArr.indexOf(element) < 0;
    });

    return newArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));