// diff two arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.


function diffArray(arr1, arr2) {

  // Same, same; but different.

    var newArr = arr2.filter(function(num) {
      // в новый массив попадают только значения, которых нет в проверяемом массиве
      if (arr1.indexOf(num) == -1) {
        return num;
      }
    }); 
  
    var newArr2 = arr1.filter(function(num) {
      if (arr2.indexOf(num) == -1) {
        return num;
      }
    }); 

    newArr = newArr.concat(newArr2);

//   console.log(newArr);
    return newArr;
    
  }

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);