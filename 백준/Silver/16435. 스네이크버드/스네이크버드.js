let [[N, L], heights] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

heights.sort((a, b) => a - b);

heights.forEach((height) => {
  if (height <= L) {
    L++;
  }
});

console.log(L);
