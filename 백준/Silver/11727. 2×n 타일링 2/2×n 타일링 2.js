const input = +require("fs").readFileSync("/dev/stdin").toString();


const dp = new Array(input + 1).fill(0);

dp[1] = 1;
dp[2] = 3;

for (let i = 3; i < dp.length; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
}

console.log(dp[input]);
