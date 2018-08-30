// Use class keyword and write a proper constructor to create the Vegetable class.

// The Vegetable lets you create a vegetable object, with a property name, to be passed to constructor.

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Vegetable{
    constructor(className){
      this.className = className;
    }
  }
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'

// The class syntax simply replaces the constructor function creation:

// class SpaceShuttle {
//   constructor(targetPlanet){
//     this.targetPlanet = targetPlanet;
//   }
// }
// const zeus = new SpaceShuttle('Jupiter');