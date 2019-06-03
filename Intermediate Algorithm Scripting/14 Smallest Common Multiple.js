function smallestCommons(arr) {
    
    arr = arr.sort((a, b) => a > b);

    var dividers_arr0 = []; // the array of prime dividers from 2 to arr[0]
    var dividers_arr1 = [];
    var between_arr = [];

    function check_if_prime(some_number){
        var counter = 0;
        for (let index = 2; index <= Math.sqrt(some_number); index++) {
          if (some_number % index === 0) {
            counter ++;
            break;
          }  
        }
        if (counter > 0){
          return false;
        } else return true; 
    }


    // 1. check if both numbers are primes;

    function get_prime_dividers_array(num){

        var prime_dividers_array =[];

        if (check_if_prime(num))
        {
            prime_dividers_array.push(num);
        } 
        else 
        {

            // 2. for both numbers make an array of dividers which are primes;
            for (let index = 2; index <= Math.sqrt(num); index++)
            {
                if (check_if_prime(index)) 
                {
                    prime_dividers_array.push(index);
                }
            }
        }

        return prime_dividers_array;

    }




    /*

    1. check if both numbers are primes;
    2. for both numbers let's make an array of dividers which are primes; 
    3. compare arrays of dividers;

    */




    
    return arr;
  }
  
  
smallestCommons([1,5]);

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