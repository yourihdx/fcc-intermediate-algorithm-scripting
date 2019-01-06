// Change how weight is declared in the Bird function so it is a private variable. Then, create a method getWeight that returns the value of weight.


function Bird() {
    let weight = 15;
    this.getWeight = function(){
      return weight;
    } 
  }

/*

The simplest way to make properties private is by creating a variable within the constructor function. This changes the scope of that variable to be within the constructor function versus available globally. This way, the property can only be accessed and changed by methods also within the constructor function.

function Bird() {
  let hatchedEgg = 10; // private property

  this.getHatchedEggCount = function() { // publicly available method that a bird object can use
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount(); // returns 10
Here getHachedEggCount is a privileged method, because it has access to the private variable hatchedEgg. This is possible because hatchedEgg is declared in the same context as getHachedEggCount. In JavaScript, a function always has access to the context in which it was created. This is called closure.

*/