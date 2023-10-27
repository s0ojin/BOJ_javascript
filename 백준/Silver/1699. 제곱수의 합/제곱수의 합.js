const N = +require("fs").readFileSync("/dev/stdin").toString();

const dp = new Array(N + 1).fill().map((_, i) => i);

for (let i = 1; i <= N; i++) {
  for (let j = 1; j < i; j++) {
    if (Math.pow(j, 2) > i) break;
    dp[i] = Math.min(dp[i], dp[i - Math.pow(j, 2)] + 1);
  }
}

console.log(dp[N]);
