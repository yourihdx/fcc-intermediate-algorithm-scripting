/*

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.In other words, return the symmetric difference of the two arrays.

Remember to use Read - Search - Ask if you get stuck.Try to pair program.Write your own code.

Note You can return the array with its elements in any order.

*/

function diffArray(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.
    newArr = arr2.filter(function (element) {
        return arr1.indexOf(element) < 0;
    });

    var newArr2 = [];
    newArr2 = arr1.filter(function(element){
        return arr2.indexOf(element) < 0;
    }); 

    return newArr.concat(newArr2);
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));