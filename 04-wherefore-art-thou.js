// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    for (var index = 0; index < collection.length; index++) {
      obj = collection[index];
      key_to_find = Object.keys(source)[0];
      if (obj.hasOwnProperty(key_to_find)){
        console.log(index, ' - key_to_find: ', key_to_find);
        console.log(index, ' - obj[key_to_find]: ', obj[key_to_find]);
        console.log(source[Object.keys(source)[0]]);
      }
      
    }
    
    // Only change code above this line
    // return arr;
    // console.log(arr);
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });