let [N] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
 
let primeNum = [];

let i = 2;

while (true) {
  if (N % i === 0) {
    N = N / i;
    primeNum.push(i);
    i = 1;
  }
  i++;
  if (i > N) {
    break;
  }
}

console.log(primeNum.join("\n"));
