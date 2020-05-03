// Only change code below this line
function countdown(n){
    if (n < 1){
      return [];
    } else{

      const countdownArray = countdown(n - 1).reverse();
      countdownArray.push(n);
      return countdownArray.reverse();
    }
  }

console.log(countdown(5));
  // Only change code above this line