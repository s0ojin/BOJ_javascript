const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = input.shift();

const max = Math.max(...input);

const dp = new Array(max + 1);
dp[1] = 1;
dp[2] = 1;
dp[3] = 1;
dp[4] = 2;
dp[5] = 2;
dp[6] = 3;
dp[7] = 4;
dp[8] = 5;
dp[9] = 7;
dp[10] = 9;

for (let i = 11; i <= max; i++) {
  dp[i] = dp[i - 1] + dp[i - 5];
}

input.forEach((n) => {
  console.log(dp[n]);
});