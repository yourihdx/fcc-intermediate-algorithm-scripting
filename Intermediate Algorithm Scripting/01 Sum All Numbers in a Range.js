/*

We 'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.

Remember to use Read - Search - Ask
if you get stuck.Try to pair program.Write your own code.

*/


function sumAll(arr) {
    var newArr = arr.sort(function (a, b) {
        return a > b;
    });
    var maxNum = newArr[newArr.length - 1];

    newArr = newArr.slice(0, 1);

    for (var i = newArr[0] + 1; i <= maxNum; i++) {
        newArr.push(i);
    }

    return newArr.reduce(function (a, b) {
        return a + b;
    });
}



sumAll([1, 4]);

console.log(sumAll);