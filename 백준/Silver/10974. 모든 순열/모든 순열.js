const input = +require("fs").readFileSync("/dev/stdin").toString().trim();

const sequence = [];

function dfs(depth) {
  if (depth === input) {
    console.log(sequence.join(" "));
    return;
  }

  for (let i = 1; i < input + 1; i++) {
    if (!sequence.includes(i)) {
      sequence.push(i);
      dfs(depth + 1);
      sequence.pop();
    }
  }
}

dfs(0);
