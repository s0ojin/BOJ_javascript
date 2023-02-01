const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();

const rope = input.map(Number);

rope.sort((a, b) => b - a);

const dp = Array(N).fill(0);
dp[0] = rope[0];

for (let i = 1; i < N; i++) {
  dp[i] = rope[i] * (i + 1);
}

console.log(Math.max(...dp));
