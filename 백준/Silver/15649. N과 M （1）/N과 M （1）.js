const [N, M] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const sequence = [];

const dfs = (count) => {
  if (count === M) {
    console.log(sequence.join(" "));
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!sequence.includes(i + 1)) {
      sequence.push(i + 1);
      dfs(count + 1);
      sequence.pop();
    }
  }
};

dfs(0);
