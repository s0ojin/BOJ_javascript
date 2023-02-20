const [N, M] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const sequence = [];
let result = "";

const dfs = (count) => {
  if (count === M) {
    result += sequence.join(" ") + "\n";
    return;
  }

  for (let i = 0; i < N; i++) {
    sequence.push(i + 1);
    dfs(count + 1);
    sequence.pop();
  }
};

dfs(0);

console.log(result);
