const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

const max = Math.max(...input);

const dp = new Array(max + 1);

dp[0] = [1, 0];
dp[1] = [0, 1];
dp[2] = [1, 1];
dp[3] = [1, 2];

for (let i = 4; i <= max; i++) {
  dp[i] = [dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]];
}

input.forEach((n) => console.log(dp[n].join(" ")));