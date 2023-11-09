const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((nums) => nums.split(" ").map(Number));

input.shift();

const dp = JSON.parse(JSON.stringify(input));

for (let i = 0; i < dp.length - 1; i++) {
  for (let j = 0; j < dp[i].length; j++) {
    dp[i + 1][j] =
      input[i + 1][j] + dp[i][j] > dp[i + 1][j]
        ? input[i + 1][j] + dp[i][j]
        : dp[i + 1][j];
    dp[i + 1][j + 1] =
      input[i + 1][j + 1] + dp[i][j] > dp[i + 1][j + 1]
        ? input[i + 1][j + 1] + dp[i][j]
        : dp[i + 1][j + 1];
  }
}

console.log(Math.max(...dp[dp.length - 1]));
