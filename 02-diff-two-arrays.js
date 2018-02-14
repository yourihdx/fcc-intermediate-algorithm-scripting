// diff two arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {

  var concat_arr = arr1.concat(arr2);
  // Same, same; but different.
  for (var index = 0; index < arr2.length; index++) {
    for (var jndex = 0; jndex < concat_arr.length; jndex++){
      // console.log(arr1[index], ' == ', concat_arr[jndex], ' is ', arr1[index] == concat_arr[jndex]);
      var newArr = arr2.filter(num => arr2[index] != concat_arr[jndex]);
    }
    
  }
  console.log(newArr);
    // return newArr;
    
  }
  
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);