function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    var strArr = str.split(/[A-Z][a-z]*/);

    strArr = strArr.map(function (element) {
        return element.toLowerCase();
    });

    strArr = strArr.join("-");

    return strArr;
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinal<wbr>Tap"));
console.log(spinalCase("The_Andy_<wbr>Griffith_Show"));
console.log(spinalCase("AllThe-small Things"));