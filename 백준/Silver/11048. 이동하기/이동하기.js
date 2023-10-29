const [[N, M], ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

const dp = JSON.parse(JSON.stringify(input));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (i + 1 < N) {
      dp[i + 1][j] =
        input[i + 1][j] + dp[i][j] > dp[i + 1][j]
          ? input[i + 1][j] + dp[i][j]
          : dp[i + 1][j];
    }

    if (j + 1 < M) {
      dp[i][j + 1] =
        input[i][j + 1] + dp[i][j] > dp[i][j + 1]
          ? input[i][j + 1] + dp[i][j]
          : dp[i][j + 1];
    }

    if (i + 1 < N && j + 1 < M) {
      dp[i + 1][j + 1] =
        input[i + 1][j + 1] + dp[i][j] > dp[i + 1][j + 1]
          ? input[i + 1][j + 1] + dp[i][j]
          : dp[i + 1][j + 1];
    }
  }
}

console.log(Math.max(...dp.flat()));
