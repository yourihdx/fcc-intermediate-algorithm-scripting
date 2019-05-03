function fearNotLetter(str) {

	var splitted_str = str.split('');
  var first_letter = str[0];
  var last_letter = str[str.length - 1];

  function range(start, stop) {
    var result=[];
    for (var idx=start.charCodeAt(0),end=stop.charCodeAt(0); idx <=end; ++idx){
    result.push(String.fromCharCode(idx));
    }
    return result;
   };
   
   var full_array = range(first_letter, last_letter);

   console.log(full_array);

   for (var i = 0; i < full_array.length; i++){
     if (full_array[i] != splitted_str[i]){
       return full_array[i];
     }
   }
}

console.log(fearNotLetter("abce"));

/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

*/















/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/