// Define the constructor property on the Dog prototype.

function Dog(name) {
    this.name = name;
}

// Modify the code below this line
Dog.prototype = {
    constructor: Dog, // defining the constructor property
    numLegs: 2,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};



/*


There is one crucial side effect of manually setting the prototype to a new object.It erased the constructor property!

To fix this, whenever a prototype is manually set to a new object, remember to define the constructor property.

*/
