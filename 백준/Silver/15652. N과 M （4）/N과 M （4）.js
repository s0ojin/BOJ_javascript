const [N, M] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const sequence = [];

const dfs = (count, start) => {
  if (count === M) {
    console.log(sequence.join(" "));
    return;
  }

  for (let i = start; i < N; i++) {
    sequence.push(i + 1);
    dfs(count + 1, i);
    sequence.pop();
  }
};

dfs(0, 0);
