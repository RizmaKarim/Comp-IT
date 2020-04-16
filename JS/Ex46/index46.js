var userAndPassword = 'pepito2017,12345';
var username = userAndPassword.substr(0,10);
var password = userAndPassword.substr(11,5);
var template = `The User ${username} has ${password} as Password`;
console.log (template);