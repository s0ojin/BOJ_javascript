const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.shift();

const max = Math.max(...input);
const nonPrime = { 1: true };

for (let i = 2; i <= max; i++) {
  if (nonPrime[i]) {
    continue;
  }

  for (let j = i ** 2; j <= max; j += i) {
    nonPrime[j] = true;
  }
}

const primeArr = [];

for (i = 2; i <= max; i++) {
  if (!nonPrime[i]) {
    primeArr.push(i);
  }
}

const goldbachNum = [];
input.forEach((input) => {
  for (let i = 0; primeArr[i] <= input / 2; i++) {
    const otherPrimeIndex = primeArr.indexOf(input - primeArr[i]);

    if (otherPrimeIndex !== -1) {
      goldbachNum.push([primeArr[i], primeArr[otherPrimeIndex]]);
    }
  }
  const answer = goldbachNum.pop();
  console.log(answer[0], answer[1]);
});