const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = [input[0].length, input[1].length];

const dp = Array.from({ length: N + 1 }, () => new Array(M + 1).fill(0));

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= M; j++) {
    if (input[0][i - 1] === input[1][j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
}

console.log(Math.max(...dp.flat()));
