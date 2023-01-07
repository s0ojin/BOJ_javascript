const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const T = input.shift();

const dp = new Array(11);

dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i <= Math.max(...input); i++) {
  dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
}

input.forEach((num) => console.log(dp[num]));
