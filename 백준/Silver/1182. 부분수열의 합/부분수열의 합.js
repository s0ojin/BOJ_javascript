const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, S] = input[0].split(" ").map(Number);

const nums = input[1].split(" ").map(Number);
const visited = Array(N).fill(false);

const sequence = [];
let sum;
let answer = 0;
let M = 1;

const dfs = (count, start) => {
  if (count === M) {
    sum = sequence.reduce((acc, cur) => acc + cur, 0);
    if (sum === S) answer++;
    return;
  }

  for (let i = start; i < N; i++) {
    if (visited[i] === false) {
      sequence.push(nums[i]);
      start++;
      visited[i] === true;
      dfs(count + 1, start);
      visited[i] === false;
      sequence.pop();
    }
  }
};

for (let i = 0; i < N; i++) {
  dfs(0, 0);
  M++;
}

console.log(answer);
