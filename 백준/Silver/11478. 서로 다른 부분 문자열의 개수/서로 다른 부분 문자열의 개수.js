const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const N = input.length;

const set = new Set();

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N + 1; j++) {
    set.add(input.slice(i, j));
  }
}

console.log(set.size);
