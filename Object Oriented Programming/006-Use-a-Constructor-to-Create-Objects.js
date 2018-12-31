// Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound.

function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }

  // Add your code below this line
let hound = new Dog();

/*

Notice that the new operator is used when calling a constructor. This tells JavaScript to create a new instance of Bird called blueBird. Without the new operator, this inside the constructor would not point to the newly created object, giving unexpected results.

*/