function telephoneCheck(str) {

    // const regexStr = /(1(?=\s)*(\d\d\d|\(\d\d\d\))(-*|\s*)\d\d\d(-*|\s*)\d\d\d\d/;
    const regexStr = /(^1\s\d\d\d(-|\s)|^1\s\(\d\d\d\)\s|^\d\d\d-|^\d\d\d|^\(\d\d\d\)|^1\(\d\d\d\))(\d\d\d-\d\d\d\d|\d\d\d \d\d\d\d|\d\d\d\d\d\d\d)$/;
    
    
    
    let result = regexStr.test(str);
  
    return result;
  }
  
telephoneCheck("555-555-5555");

console.log(telephoneCheck("1 555-555-5555")); // should return true.
console.log(telephoneCheck("1 (555) 555-5555")); // should return true.
console.log(telephoneCheck("(6054756961)")); // should return false
console.log(telephoneCheck("2 (757) 622-7382")); // should return false
console.log(telephoneCheck("5555555555")); // should return true.
console.log(telephoneCheck("555-555-5555")); // should return true.
console.log(telephoneCheck("(555)555-5555")); // should return true.
console.log(telephoneCheck("1(555)555-5555")); // should return true.
console.log(telephoneCheck("1 555 555 5555")); // should return true.
console.log(telephoneCheck("1 456 789 4444")); // should return true.