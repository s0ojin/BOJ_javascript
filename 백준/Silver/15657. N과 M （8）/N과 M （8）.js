let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

input = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const sequence = [];

function dfs(depth) {
  if (depth === M) {
    console.log(sequence.join(" "));
    return;
  }

  for (let i = 0; i < N; i++) {
    if (sequence[sequence.length - 1] > input[i]) continue;
    sequence.push(input[i]);
    dfs(depth + 1);
    sequence.pop();
  }
}

dfs(0);
