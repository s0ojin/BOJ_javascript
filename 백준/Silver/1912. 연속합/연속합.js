const [N, sequence] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((seq) => seq.split(" ").map(Number));

const dp = new Array(sequence.length).fill();
dp[0] = sequence[0];

for (let i = 1; i < sequence.length; i++) {
  if (dp[i - 1] + sequence[i] < sequence[i]) {
    dp[i] = sequence[i];
  } else {
    dp[i] = dp[i - 1] + sequence[i];
  }
}

console.log(Math.max(...dp));
