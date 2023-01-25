const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const days = [];

input.forEach((day) => {
  days.push(day.split(" ").map(Number));
});

const dp = Array(N).fill(0);

for (let i = 0; i < N; i++) {
  const period = days[i][0];
  if (i + period > N) {
    continue;
  }

  dp[i] = days[i][1] + dp[i];

  for (let j = i + period; j < N; j++) {
    dp[j] = Math.max(dp[i], dp[j]);
  }
}

console.log(Math.max(...dp));