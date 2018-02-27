// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.


function translatePigLatin(str) {

	if(/^([^aeiou]){1,4}/.test(str)){
		var cut = str.match(/^([^aeiou]){1,4}/)[0];
		var index_of_the_rest = str.indexOf(str.match(/^([^aeiou]){1,4}/)[1]);
		str = str.substr(index_of_the_rest + 1, str.length) + cut + "ay";
	} else {
		str = str + "way";
	}
	

    return str;
  }
  
  translatePigLatin("consonant");