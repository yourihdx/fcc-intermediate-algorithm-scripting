const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator.push(currentValue);

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer), []);
// expected output: 10