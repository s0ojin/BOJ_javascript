const N = require('fs').readFileSync('/dev/stdin');

let sum = 1;
let i = 1;

while (sum < N) {
  sum += i * 6;
  i++;
}

console.log(i);


