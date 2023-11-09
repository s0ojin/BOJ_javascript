const input = +require("fs").readFileSync("/dev/stdin").toString().trim();

const dp = Array.from({ length: input + 1 }, () => new Array(10));

dp[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];

for (let i = 2; i < dp.length; i++) {
  for (let j = 0; j < 10; j++) {
    if (j === 0) {
      dp[i][j] = dp[i - 1][1] % 1000000000;
    }
    if (j > 0 && j < 9) {
      dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % 1000000000;
    }
    if (j === 9) {
      dp[i][j] = dp[i - 1][8] % 1000000000;
    }
  }
}

console.log(dp[input].reduce((acc, cur) => acc + cur, 0) % 1000000000);
