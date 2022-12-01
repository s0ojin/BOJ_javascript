const [M, N] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);
  
const prime = { 1: true };

for (let i = 2; i <= N; i++) {
  if (prime[i]) {
    continue;
  }

  for (let j = i ** 2; j <= N; j += i) {
    prime[j] = true;
  }
}

const results = [];

for (let i = M; i <= N; i++) {
  if (!prime[i]) {
    results.push(i);
  }
}

console.log(results.join("\n"));
