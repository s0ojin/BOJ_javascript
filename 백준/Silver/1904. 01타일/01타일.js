const input = +require("fs").readFileSync("dev/stdin").toString().trim();

const dp = new Array(input + 1).fill();

dp[1] = 1;
dp[2] = 2;
dp[3] = 3;

for (let i = 4; i < dp.length; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
}

console.log(dp[input]);
