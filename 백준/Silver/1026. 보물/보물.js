let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);

const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);

let answer = 0;

for (let i = 0; i < N; i++) {
  const maxA = Math.max(...A);
  const minB = Math.min(...B);
  answer += maxA * minB;
  A.splice(A.indexOf(maxA), 1);
  B.splice(B.indexOf(minB), 1);
}

console.log(answer);
