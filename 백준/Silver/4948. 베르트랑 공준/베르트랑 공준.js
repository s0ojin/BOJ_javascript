const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

input.pop();

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

input.forEach((n) => {
  let counter = 0;
  for (let i = n + 1; i <= 2 * n; i++) {
    if (isPrime(i)) {
      counter++;
    }
  }
  console.log(counter);
});
