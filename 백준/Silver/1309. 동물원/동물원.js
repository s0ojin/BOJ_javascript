const input = +require("fs").readFileSync("/dev/stdin").toString();

const dp = new Array(input + 1).fill(0);

dp[0] = 0;
dp[1] = 3;
dp[2] = 7;
dp[3] = 17;

for (let i = 4; i < dp.length; i++) {
  dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % 9901;
}

console.log(dp[input] % 9901);
