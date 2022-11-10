const [A, B] = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const reverseA = A.split('').reverse().join('');
const reverseB = B.split('').reverse().join('');

console.log(+reverseA > +reverseB ? +reverseA : +reverseB);
