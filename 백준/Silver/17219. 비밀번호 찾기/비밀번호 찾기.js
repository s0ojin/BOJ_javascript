const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const dict = new Map();

for (let i = 1; i <= N; i++) {
  const [id, password] = input[i].split(" ");
  dict.set(id, password);
}

for (let j = N + 1; j <= N + M; j++) {
  console.log(dict.get(input[j]));
}
