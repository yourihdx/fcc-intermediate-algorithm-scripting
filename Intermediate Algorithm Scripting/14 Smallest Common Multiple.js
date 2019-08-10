function smallestCommons(arr) { 
  
  var new_arr = arr.sort((a,b)=>a > b);
  var gcd;

  function GreatestCommonDivisor(a, b){

    var remainder;

    if (a > b){
        var A = a;
        var B = b;
    } else{
        var A = b;
        var B = a;
    }

    do {
        
        remainder = A % B;
        A = B;

        if(remainder === 0){
            return B;
        }

        B = remainder;

    } while (remainder !== 0);

    return false;

  }

  function SmallestCommonMultiple(a, b){
    return a * b / GreatestCommonDivisor(a, b);
  }

  var scm = arr[0];

  var i = arr[0];

  do {
    scm = SmallestCommonMultiple(scm, i+1);
    i++;
  } while (i < arr[1]);

  return scm;

}

 
console.log(smallestCommons([1,5]));

console.log(smallestCommons([1, 5])); // should return a number.
console.log(smallestCommons([1, 5])); // should return 60.
console.log(smallestCommons([5, 1])); // should return 60.
console.log(smallestCommons([2, 10])); // should return 2520.
console.log(smallestCommons([1, 13])); // should return 360360.
console.log(smallestCommons([23, 18])); // should return 6056820.







// Smallest Common Multiple

/*

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

*/