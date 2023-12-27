const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(item=>+item);

const a = input[0];
const b = input[1];

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(parseInt(a/b));
console.log(a%b);
