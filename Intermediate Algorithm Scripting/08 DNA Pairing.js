function pairElement(str) {

  var AT = ["A", "T"];
  var TA = ["T", "A"];
  var CG = ["C", "G"];
  var GC = ["G", "C"];

  function returnPairForALetter (some_letter) {
  	switch (some_letter) {
  		case "A":
  			return AT;
  			break;
		case "T":
			return TA;
			break;
		case "C":
			return CG;
			break;
		case "G":
			return GC;
  		default:
  			return undefined;
  			break;
  	}
  }

  var new_str =[];
  var arr_to_pair = str.split('');

  arr_to_pair.forEach(function (element) {
  	new_str.push(returnPairForALetter(element));
  })



  return new_str;
}

console.log(pairElement("ATA"));


console.log(pairElement("GCG"));

console.log(pairElement("ATCGA")); // should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
console.log(pairElement("TTGAG")); // should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
console.log(pairElement("CTCTA")); // should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].

/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/
