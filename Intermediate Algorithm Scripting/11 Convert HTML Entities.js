function convertHTML(str) {

    // &, <, >, ", '

    // & - ampersand                            - &amp;
    // < - less than                            - &lt;
    // > - greater than                         - &gt;
    // " - double quotation mark                - &quot;
    // ' - single quotation mark (apostrophe)   - &apos;

    var str_split = str.split('');
    var new_arr = [];

    function convertChar(char){
        switch (char){
            case '&':
                return "&amp;";
            case '<':
                return "&lt;";
            case '>':
                return "&gt;";
            case '"':
                return "&quot;";
            case "'":
                return "&apos;";
            default:
                return char;
        }

    }

    str_split.forEach(function(element){
        
        new_arr.push(convertChar(element));

    })


    return new_arr.join('');
  }
  
console.log(convertHTML("Dolce & Gabbana"));





console.log(convertHTML("Dolce & Gabbana")); // should return Dolce &​amp; Gabbana.
console.log(convertHTML("Hamburgers < Pizza < Tacos")); //  should return Hamburgers &​lt; Pizza &​lt; Tacos.
console.log(convertHTML("Sixty > twelve")); //  should return Sixty &​gt; twelve.
console.log(convertHTML('Stuff in "quotation marks"')); //  should return Stuff in &​quot;quotation marks&​quot;.
console.log(convertHTML("Schindler's List")); //  should return Schindler&​apos;s List.
console.log(convertHTML("<>")); //  should return &​lt;&​gt;.
console.log(convertHTML("abc")); //  should return abc.








// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.