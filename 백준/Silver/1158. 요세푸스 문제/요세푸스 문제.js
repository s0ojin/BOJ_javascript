const [N, K] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

const arr = new Array(N).fill().map((_, idx) => idx + 1);

let count = 0;
const answer = [];

while (arr.length > 0) {
  count = (count + K - 1) % arr.length;

  answer.push(arr[count]);

  arr.splice(count, 1);
}

console.log(`<${answer.join(", ")}>`);
