// Modify the code to show the correct prototype chain.

function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle); // => true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);


/*

Object is a supertype
for all objects in JavaScript.Therefore, any object can use the hasOwnProperty method.

*/
