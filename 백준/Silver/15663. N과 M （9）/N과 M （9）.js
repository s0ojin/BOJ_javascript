const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const nums = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const sequence = [];
const visit = Array.from({ length: N }, () => false);
const answer = new Set();

function dfs(depth) {
  if (depth === M) {
    answer.add(sequence.join(" "));
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!visit[i]) {
      visit[i] = true;
      sequence.push(nums[i]);
      dfs(depth + 1);
      sequence.pop();
      visit[i] = false;
    }
  }
}

dfs(0);

console.log([...answer].join("\n"));
