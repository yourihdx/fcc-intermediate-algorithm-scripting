// Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if the candidate is a Dog, otherwise return false.


function Dog(name) {
    this.name = name;
}

// Add your code below this line
function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
        return true;
    } else {
        return false;
    }
}

/* Note
Since the constructor property can be overwritten(which will be covered in the next two challenges) it’ s generally better to use the instanceof method to check the type of an object.

*/