const [A,B] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(BigInt);

const sum = (A + B).toString();
console.log(sum);
