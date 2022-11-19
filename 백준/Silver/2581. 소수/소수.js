const [M,N] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);

let primeArr = [];

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

for (let i = M; i <= N; i++) {
  isPrime(i) ? primeArr.push(i) : null;
}

const sum = primeArr.reduce((acc, cur) => acc + cur, 0);
const min = Math.min(...primeArr);

console.log(primeArr.length === 0 ? -1 : `${sum}\n${min}`);

