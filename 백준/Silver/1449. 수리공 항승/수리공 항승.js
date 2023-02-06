const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, L] = input.shift().split(" ").map(Number);

const holes = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let start = holes[0] - 0.5;
let count = 1;

for (let i = 0; i < N; i++) {
  if (start + L <= holes[i] - 0.5) {
    count++;
    start = holes[i] - 0.5;
  }
}

console.log(count);
