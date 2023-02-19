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
    if (!sequence.includes(i + 1)) {
      sequence.push(i + 1);
      start++;
      dfs(count + 1, start);
      sequence.pop();
    }
  }
};

dfs(0, 0);
