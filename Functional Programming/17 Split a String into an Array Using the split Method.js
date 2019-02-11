function splitify(str) {
    // Add your code below this line
    var newArr = [];
    newArr = str.split(/\W/);

    return newArr;
    // Add your code above this line
}
splitify("Hello World,I-am code");
console.log(splitify("Hello World,I-am code"));