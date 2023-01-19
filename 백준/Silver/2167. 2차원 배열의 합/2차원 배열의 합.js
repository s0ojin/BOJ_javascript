const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const K = Number(input[N]);

const array = [];

for (let k = 0; k < N; k++) {
  array.push(input[k].split(" ").map(Number));
}

for (let l = N + 1; l < N + 1 + K; l++) {
  const [i, j, x, y] = input[l].split(" ").map(Number);
  let sum = 0;

  for (let n = i - 1; n < x; n++) {
    for (let m = j - 1; m < y; m++) {
      sum += array[n][m];
    }
  }
  console.log(sum);
}
