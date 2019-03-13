function translatePigLatin(str) {

  var re = /^[bcdfghjklmnpqrstvwxyz]+/;
  var catchingRe = /(^[bcdfghjklmnpqrstvwxyz]+)/;
  var vowelRe = /[aeiou]/;

  var newStr = "";

  if(vowelRe.test(str) == false){
    return str + "ay";
  }

  if(re.test(str)){
    newStr = str.split(re);
    return newStr[1] + str.match(catchingRe)[0] + "ay";
  } else {
    return str + "way";
  }
}
  
console.log(translatePigLatin("consonant"));

console.log(translatePigLatin("california")); // should return "aliforniacay".
console.log(translatePigLatin("paragraphs"));// should return "aragraphspay".
console.log(translatePigLatin("glove")); // should return "oveglay".
console.log(translatePigLatin("algorithm")); // should return "algorithmway".
console.log(translatePigLatin("eight")); // should return "eightway".
console.log(translatePigLatin("str"));

/*

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

*/