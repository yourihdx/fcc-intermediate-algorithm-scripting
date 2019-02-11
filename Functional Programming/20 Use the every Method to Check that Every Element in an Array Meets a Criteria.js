/*

Use the every method inside the checkPositive function to check if every element in arr is positive.The function should return a Boolean value.

*/


function checkPositive(arr) {
    // Add your code below this line
    return arr.every(function (currentValue) {
        return currentValue > 0;
    });

    // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);