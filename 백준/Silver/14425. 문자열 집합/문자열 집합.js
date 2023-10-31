const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, _] = input.shift().split(" ").map(Number);

const S = new Set(input.slice(0, N));
const compareArr = input.slice(N);
let count = 0;

compareArr.forEach((str) => {
  if (S.has(str)) {
    count++;
  }
});

console.log(count);
