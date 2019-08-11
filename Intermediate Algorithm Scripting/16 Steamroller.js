function steamrollArray(arr) {
    // I'm a steamroller, baby
    var new_arr = [];
    var some_arr = arr.forEach((el) => ifNotArray(el));

    function ifNotArray(item){

      if (!Array.isArray(item)){
        console.log(item);
        new_arr.push(item);
      } else{
        item.forEach((element)=>ifNotArray(element));
      }
    }

    return new_arr;
  }
  
console.log(steamrollArray([1, [2], [3, [[4]]]]));


console.log(steamrollArray([[["a"]], [["b"]]])); // should return ["a", "b"].
console.log(steamrollArray([1, [2], [3, [[4]]]])); // should return ["a", "b"]. should return [1, 2, 3, 4].
console.log(steamrollArray([1, [], [3, [[4]]]])); // should return ["a", "b"]. should return [1, 3, 4].
console.log(steamrollArray([1, {}, [3, [[4]]]])); // should return ["a", "b"]. should return [1, {}, 3, 4].












/*

Flatten a nested array. You must account for varying levels of nesting.

*/