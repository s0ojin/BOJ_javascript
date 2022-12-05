const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.shift();

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

input.forEach((input) => {
  let left = input / 2;
  let right = input / 2;

  while (!isPrime(left) || !isPrime(right)) {
    left -= 1;
    right += 1;
  }

  console.log(left, right);
});