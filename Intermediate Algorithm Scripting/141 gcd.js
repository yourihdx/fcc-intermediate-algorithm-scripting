function GreatestCommonDivisor(a, b){

    if (a > b){
        var A = a;
        var B = b;
    } else{
        var A = b;
        var B = a;
    }

    do {
        
        remainder = A % B;
        A = B;

        if(remainder === 0){
            return B;
        }

        B = remainder;

    } while (remainder !== 0);

    return false;

}

var firstVar = prompt('Введите первое число: ');
var secondVar = prompt('Введите второе число: ');

console.log('gcd ' + firstVar + ' and ' + secondVar +': ' + GreatestCommonDivisor(firstVar, secondVar));
