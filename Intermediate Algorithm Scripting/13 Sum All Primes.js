function sumPrimes(num) {

  var primes_sum = 0;

  function checkIfPrime(some_number){
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
  
  for (var i = 2; i <= num; i++) {
    if (checkIfPrime(i)){
      primes_sum += i;
    }
    
  }


  return primes_sum;
  }
  
console.log(sumPrimes(10));





/*
console.log(sumPrimes(17));
console.log(sumPrimes(10)); // should return a number.
console.log(sumPrimes(10)); // should return 17.
console.log(sumPrimes(977)); // should return 73156.
*/



/*

Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

*/