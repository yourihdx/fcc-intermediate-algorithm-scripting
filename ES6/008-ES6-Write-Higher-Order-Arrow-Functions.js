// Use arrow function syntax to compute the square of only the positive integers (fractions are not integers) in the array realNumberArray and store the new array in the variable squaredIntegers.

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
  "use strict";
  // change code below this line
      const squaredIntegers1 = arr.filter(arr => (arr > 0 && !isNaN(arr)) && parseInt(Number(arr)) == arr && !isNaN(parseInt(arr, 10)));

      const squaredIntegers = squaredIntegers1.map(x => x ** 2);

  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);