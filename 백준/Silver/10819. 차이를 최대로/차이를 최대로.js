let [N, input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input = input.split(" ").map(Number);

const sequence = [];
const visit = Array.from({ length: N }, () => false);
let max = 0;

function dfs(depth) {
  if (depth === +N) {
    const result = sequence.reduce((acc, cur, idx, array) => {
      if (idx < array.length - 1) {
        return acc + Math.abs(cur - array[idx + 1]);
      } else return acc;
    }, 0);
    max = Math.max(max, result);
    return;
  }

  input.forEach((num, idx) => {
    if (!visit[idx]) {
      visit[idx] = true;
      sequence.push(num);
      dfs(depth + 1);
      sequence.pop();
      visit[idx] = false;
    }
  });
}

dfs(0);

console.log(max);
