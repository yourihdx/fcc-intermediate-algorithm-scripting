// String.fromCharCode(97 + n); // where n is 0, 1, 2 ... 97 is ACII for 'a', n = 0...25
// String.fromCharCode(65 + n) -- 65 is ASCII for 'A'


function binaryAgent(str) {

    let someArr = str.split(' ');
    str = someArr.map(elem => {
        if ((elem.substr(0,3) === '001') && (elem === '00100000')){
          return ' ';
        } else if (elem.substr(0,3) == '010') {
          return String.fromCharCode(65 + parseInt(elem.substr(3),2)-1);
        } else if (elem.substr(0,3) == '011') {
          return String.fromCharCode(97 + parseInt(elem.substr(3),2)-1);
        } else if (elem == '00100001'){
          return '!';
        } else if (elem == '00111111'){
          return '?';
        } else if (elem == '00100111'){
          return "'";
        }
      })

    str = str.join('');
    return str;
  }

  

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")); //should return "Aren't bonfires fun!?"

console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001")); //should return "I love FreeCodeCamp!"



/*

Return an English translated sentence of the passed binary string.

The binary string will be space separated.

*/