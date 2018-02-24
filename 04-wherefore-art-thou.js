// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    var source_keys = Object.keys(source);
    for (var index = 0; index < collection.length; index++) {
      var obj = collection[index];
      var obj_keys = Object.keys(obj);
      console.log('obj_keys: ', obj_keys);
      // console.log('source_keys: ', source_keys);

      var test_arr = source_keys.filter(function(key){
        if(obj_keys.indexOf(key) != -1) {
          return key;
        }
      });

      console.log(test_arr.length == source_keys.length); 
    }

    console.log(arr);
    // && (Object.values(obj).indexOf(source_keys[key])) != -1)
    // Only change code above this line
    // return arr;
    
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });