const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [_, N] = input.shift().split(" ").map(Number);

const lanCables = input.map(Number).sort((a, b) => a - b);

let max = Math.max(...lanCables);
let min = 1;

while (min <= max) {
  let mid = parseInt((min + max) / 2);
  let count = lanCables.reduce((acc, cur) => {
    return acc + parseInt(cur / mid);
  }, 0);

  if (count >= N) {
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}

console.log(max);
