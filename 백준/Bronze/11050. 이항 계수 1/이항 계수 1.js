const [N, K] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function Factorial(n) {
  if (n <= 1) return 1;
  return n * Factorial(n - 1);
}

console.log(Factorial(N) / (Factorial(K) * Factorial(N - K)));
