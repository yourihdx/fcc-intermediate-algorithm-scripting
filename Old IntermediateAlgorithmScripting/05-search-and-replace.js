// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"


function myReplace(str, before, after) {
    // разбиваем предложение по знаку пробела, получаем массив слов:
    str_array = str.split(' ');
    console.log(str_array);
    // находим слово которое надо заменить:
    var index = str_array.indexOf(before);
    if(index != -1){
        // заменяем слово в массиве:
        str_array.splice(index, 1, checkAndCapitalize(after, before));
    }

    str = str_array.join(' ');

    return str;
  }

  function checkAndCapitalize(word, example) {
      if (example[0] === example[0].toUpperCase()) {
          return (word[0].toUpperCase() + word.slice(1, word.length));
      } else {
          return (word[0].toLowerCase()) + word.slice(1, word.length);
        }
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  