var playerName = 'Patrik Laine is lame';
var teams = 'New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins';
let message = 'Winnipeg is the best Canadian city, Go Winnipeg.';
var result1 = playerName.slice (0,15);
var result2 = teams.slice(46,51);
var result3 = message.slice(12,20);
var result4 = message.slice(34,38);
var word = playerName.slice (0,12);
var sent1 = word.toUpperCase()
const capital = result2;
const capitalized = capital.charAt(0).toUpperCase() + capital.slice(1);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(capitalized);
console.log(sent1);
var template = `${sent1} is ${result3} ${capitalized} player ${result4} ${capitalized} !!`;
console.log(template);