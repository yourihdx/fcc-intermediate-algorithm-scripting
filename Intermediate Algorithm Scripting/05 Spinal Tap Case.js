// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    var strArr = str.split(/[^\W+[a-z]+\W+]|([A-Z][a-z]+-+[a-z]+)|([A-Z][a-z]+-+[a-z]+)|([A-Z][a-z]+)|\^W+[A-Z]+[a-z]+\W+/);
    console.log(strArr);

    strArr = strArr.filter(function(element){
        if (element != undefined)
            {var new_element = element.trim();
            return (new_element.length > 0) && !(/_|<|>/.test(element));}
        else return false;
    });

    strArr = strArr.map(function (element) {
        return element.toLowerCase();
    });

    strArr = strArr.map(function(element){
        return element.trim();
    });

    strArr = strArr.join("-");

    return strArr;
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinal<wbr>Tap"));
console.log(spinalCase("The_Andy_<wbr>Griffith_Show"));
console.log(spinalCase("AllThe-small Things"));
console.log(spinalCase("Teletubbies say Eh-oh"));