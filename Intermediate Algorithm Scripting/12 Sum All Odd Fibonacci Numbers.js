function sumFibs(num) {

    var fib_arr = [1, 1];

    for(var i = 1; fib_arr[i] < num; i++){
        if ((fib_arr[i-1] + fib_arr[i]) <= num){
            fib_arr.push(fib_arr[i-1] + fib_arr[i]);
        }
    }

    fib_arr = fib_arr.filter(element => element % 2 != 0);

    return fib_arr.reduce((acumulator, currentValue)=> acumulator + currentValue);
  }
  
sumFibs(4);


console.log(sumFibs(1)); // should return a number.
console.log(sumFibs(1000)); //  should return 1785.
console.log(sumFibs(4000000)); //  should return 4613732.
console.log(sumFibs(4)); //  should return 5.
console.log(sumFibs(75024)); //  should return 60696.
console.log(sumFibs(75025)); //  should return 135721.


/*

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

*/