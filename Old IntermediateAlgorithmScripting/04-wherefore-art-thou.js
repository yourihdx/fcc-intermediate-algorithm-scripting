// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var source_keys = Object.keys(source);
  arr = collection.filter(function(obj) {
    // in the function we are getting obj and check it whatever we like
    var sum = 0;
    
    for (var index = 0; index < source_keys.length; index++) {
      if(
        (obj.hasOwnProperty(source_keys[index])) && (obj[source_keys[index]] == (source[source_keys[index]]))
      ){      
        sum++;
      }
    }  
    // if all pairs of key: value are in obj properties and match, we return obj to arr;
    if(sum == source_keys.length){
      return obj;
    }

  });
  // Only change code above this line
  return arr;
    
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });