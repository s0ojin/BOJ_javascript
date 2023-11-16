const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((nums) => nums.split(" ").map(Number));


const [N, limit] = input[0];
const dp = Array.from({ length: N + 1 }, () => Array(limit + 1).fill(0));

for (let i = 1; i <= N; i++) {
  const [weight, value] = input[i];
  for (let j = 1; j <= limit; j++) {
    if (j - weight >= 0)
      dp[i][j] = Math.max(dp[i - 1][j - weight] + value, dp[i - 1][j]);
    else dp[i][j] = dp[i - 1][j];
  }
}

console.log(dp[N][limit]);
