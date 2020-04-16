var text = 'HELLO';
var result1 = text.charAt(text.length-1);
var result2 = text.charAt(text.length-2);
var result3 = text.charAt(text.length-3);
var result4 = text.charAt(text.length-4);
var result5 = text.charAt(text.length-5);
var template = ` The Final Result is : ${result1.toLowerCase().concat()} ${result2.toLowerCase()} ${result3.toLowerCase()} ${result4.toLowerCase()} ${result5.toLowerCase()}`;
console.log (template);


