function uniteUnique(arr) {

  var new_arr = [];

  var args_arr = Object.values(arguments);

  var reducer = (accumulator, currentValue) => {

    var filtered_arr = [];

    filtered_arr = currentValue.filter(function(element){
      var check = !accumulator.includes(element);
      return check;
    });

    accumulator = accumulator.concat(filtered_arr);

    return accumulator;
  }

  return args_arr.reduce(reducer);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);




console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // should return [1, 3, 2, 5, 4].

console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])); // should return [1, 3, 2, [5], [4]].

console.log(uniteUnique([1, 2, 3], [5, 2, 1])); // should return [1, 2, 3, 5].

console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); // should return [1, 2, 3, 5, 4, 6, 7, 8].




  /*

  Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

*/