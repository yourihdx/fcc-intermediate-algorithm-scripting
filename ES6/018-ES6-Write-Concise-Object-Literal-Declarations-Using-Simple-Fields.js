// Use simple fields with object literals to create and return a Person object.


const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  const Person = (name, age, gender) => ({name, age, gender});
  return Person;
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object

// const getMousePosition = (x, y) => ({
//   x: x,
//   y: y
// });

// can be rewritten with:

// Here is the same function from above rewritten to use this new syntax:

// const getMousePosition = (x, y) => ({ x, y });