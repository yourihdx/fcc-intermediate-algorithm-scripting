// Use Object.create to make two instances of Animal named duck and beagle.

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

// Add your code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line

duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom" 





/*

let animal = Object.create(Animal.prototype);
Object.create(obj) creates a new object, and sets obj as the new object 's prototype. Recall that the prototype is like the "recipe" for creating an object. By setting the prototype of animal to be Animal'
s prototype, you are effectively giving the animal instance the same "recipe"
as any other instance of Animal.

*/