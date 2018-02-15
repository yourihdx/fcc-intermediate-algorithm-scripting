// Convert the given number into a roman numeral.

// for numbers from 1 to 3999 
function d1(digit){
    switch (digit) {
        case '1':
            return 'I';
            break;
        case '2':
            return 'II';
            break;
        case '3':
            return 'III';
            break;
        case '4':
            return 'IV';
            break;
        case '5':
            return 'V';
            break;
        case '6':
            return 'VI';
            break;
        case '7':
            return 'VII';
            break;
        case '8':
            return 'VIII';
            break;
        case '9':
            return 'IX';
            break;
    }
}

function d2(ten) {
    switch (ten) {
        case '1':
            return 'X';
            break;
        case '2':
            return 'XX';
            break;
        case '3':
            return 'XXX';
            break;
        case '4':
            return 'XL';
            break;
        case '5':
            return 'L';
            break;
        case '6':
            return 'LX';
            break;
        case '7':
            return 'LXX';
            break;
        case '8':
            return 'LXXX';
            break;
        case '9':
            return 'XC';
            break;
    }
}

function d3(hundred) {
    switch (hundred) {
        case '1':
            return 'C';
            break;
        case '2':
            return 'CC';
            break;
        case '3':
            return 'CCC';
            break;
        case '4':
            return 'CD';
            break;
        case '5':
            return 'D';
            break;
        case '6':
            return 'DC';
            break;
        case '7':
            return 'DCC';
            break;
        case '8':
            return 'DCCC';
            break;
        case '9':
            return 'CM';
            break;
    }
}

function d4(thousand) {
    switch (thousand) {
        case '1':
            return 'M';
            break;
        case '2':
            return 'MM';
            break;
        case '3':
            return 'MM';
            break;
    }
}

function convertToRoman(num) {

    if (num > 3999) {
        alert('The Converter works for numbers from 1 to 3999 only.');
    } return;

    var num_length = num.toString().length;

    num_to_string = num.toString();
    num1 = d1(num_to_string[num_length-1]);

    switch (num_length) {
        case 1:
            num = num1;
            break;
        case 2:
            num = d2(num_to_string[num_length-2]) + num1;
            break;
        case 3:
            num = d3(num_to_string[num_length-3]) + d2(num_to_string[num_length-2]) + num1;
            break;
        case 4:
            num = d4(num_to_string[num_length-4]) + d3(num_to_string[num_length-3]) + d2(num_to_string[num_length-2]) + num1;
            break;
    }

    return num;
   }

console.log(convertToRoman(1990));