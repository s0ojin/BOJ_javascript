const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const [, K] = input[N + 1].split(" ").map(Number);
const A = [];
const B = [];
const AB = [];

for (let i = 1; i <= N; i++) {
  A.push(input[i].split(" ").map(Number));
}

for (let i = N + 2; i < input.length; i++) {
  B.push(input[i].split(" ").map(Number));
}

for (let i = 0; i < N; i++) {
  AB.push([]);
  for (let j = 0; j < K; j++) {
    partial_sum = 0;
    for (let p = 0; p < M; p++) {
      partial_sum += A[i][p] * B[p][j];
    }
    AB[i].push(partial_sum);
  }
}

AB.forEach((row) => {
  console.log(row.join(" "));
});
