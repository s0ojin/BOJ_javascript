const N = require('fs').readFileSync('/dev/stdin');

let count = 0;
let Num = N;

while (true) {
  if (Num % 5 === 0) {
    count += Num / 5;
    break;
  }
  if (Num < 0) {
    count = -1;
    break;
  }

  Num -= 3;
  count++;
}

console.log(count);
