const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((arr) => arr.trim().split(" ").map(Number));

input.pop();

const dp = Array.from({ length: 21 }, () =>
  Array.from({ length: 21 }, () => new Array(21).fill())
);

function W(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return 1;
  }

  if (a > 20 || b > 20 || c > 20) {
    return W(20, 20, 20);
  }

  if (dp[a][b][c]) {
    return dp[a][b][c];
  }

  if (a < b && b < c) {
    return (dp[a][b][c] = W(a, b, c - 1) + W(a, b - 1, c - 1) - W(a, b - 1, c));
  }

  return (dp[a][b][c] =
    W(a - 1, b, c) +
    W(a - 1, b - 1, c) +
    W(a - 1, b, c - 1) -
    W(a - 1, b - 1, c - 1));
}

input.forEach((arr) =>
  console.log(`w(${arr[0]}, ${arr[1]}, ${arr[2]}) = ${W(...arr)}`)
);
