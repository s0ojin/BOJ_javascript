const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((nums) => nums.trim().split(" ").map(Number));

const [N, M] = input.shift();

const matrix = input.slice(0, N);
const coordinates = input.slice(N);

coordinates.unshift(new Array(N).fill(0));
coordinates.forEach((coordi) => coordi.unshift(0));
matrix.unshift(new Array(N).fill(0));
matrix.forEach((row) => row.unshift(0));

const dp = JSON.parse(JSON.stringify(matrix));

for (let i = 0; i < dp.length; i++) {
  for (let j = 1; j < dp.length; j++) {
    dp[i][j] += dp[i][j - 1];
  }
}

for (let i = 1; i < dp.length; i++) {
  for (let j = 0; j < dp.length; j++) {
    dp[i][j] += dp[i - 1][j];
  }
}

let answer = "";

for (let i = 1; i < coordinates.length; i++) {
  const [_, x1, y1, x2, y2] = coordinates[i];

  answer += dp[x2][y2] - dp[x1 - 1][y2] - dp[x2][y1 - 1] + dp[x1 - 1][y1 - 1];
  answer += "\n";
}

console.log(answer.trim());
