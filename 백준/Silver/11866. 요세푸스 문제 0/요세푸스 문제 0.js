const [N, K] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const queue = Array.from({ length: N }, (_, i) => i + 1);

const answer = [];
let count = 0;

while (queue.length !== 0) {
  const removed = queue.shift();

  if (count === K - 1) {
    answer.push(removed);
    count = 0;
  } else {
    queue.push(removed);
    count++;
  }
}

console.log(`<${answer.join(", ")}>`);