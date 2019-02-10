/*

Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order.The function should return a new array, and not mutate the globalArray variable.


*/


var globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    // Add your code below this line
    var newArr = [].concat(arr);
    newArr.sort(function (a, b) {
        return a > b;
    })
    return newArr;
    // Add your code above this line
}
nonMutatingSort(globalArray);