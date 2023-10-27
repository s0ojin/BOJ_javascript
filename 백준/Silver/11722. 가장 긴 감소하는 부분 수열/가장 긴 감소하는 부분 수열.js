const [N, arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const sequence = arr.split(" ").map(Number);

const dp = new Array(sequence.length).fill(1);

for (let i = 0; i < sequence.length; i++) {
  let temp = 0;
  for (let j = 0; j < i; j++) {
    if (sequence[i] < sequence[j]) {
      temp = temp > dp[j] ? temp : dp[j];
    }
  }
  dp[i] += temp;
}

console.log(Math.max(...dp));
