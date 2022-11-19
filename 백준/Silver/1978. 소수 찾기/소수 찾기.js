const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const N = input[0];
const inputArr = input[1].split(" ").map(Number);

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

const primeNum = inputArr.filter(isPrime);

console.log(primeNum.length);

