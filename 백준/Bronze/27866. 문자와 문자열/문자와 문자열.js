const [S, num] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

console.log(S[num - 1]);
