const [T, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(" ").map(Number));

function DP(site) {
  const dp = Array.from(Array(31), () => Array(31).fill(0));
  const [N, M] = site;

  for (let i = 1; i <= N; i++) {
    for (let j = i; j <= M; j++) {
      if (i === j) {
        dp[i][j] = 1;
      } else if (i === 1) {
        dp[i][j] = j;
      } else {
        let temp = 0;
        for (let k = 1; k < j; k++) {
          temp += dp[i - 1][k];
        }
        dp[i][j] = temp;
      }
    }
  }
  return dp[N][M];
}

input.forEach((site) => console.log(DP(site)));
