const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const dict = {};

for (let i = 1; i <= N; i++) {
  dict[i] = input[i];
  dict[input[i]] = i;
}

for (let j = N + 1; j < N + 1 + M; j++) {
  console.log(dict[input[j]]);
}
