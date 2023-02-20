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
let result = "";

const dfs = (count) => {
  if (count === M) {
    result += sequence.join(" ") + "\n";
    return;
  }

  for (let i = 0; i < N; i++) {
    sequence.push(nums[i]);
    dfs(count + 1);
    sequence.pop();
  }
};

dfs(0);

console.log(result);
