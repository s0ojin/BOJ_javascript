const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

const A = input.shift().split(" ").map(Number);

const [B, C] = input.shift().split(" ").map(Number);

let answer = 0;

for (let i = 0; i < N; i++) {
  answer++;

  if (B >= A[i]) {
    continue;
  }

  answer += Math.ceil((A[i] - B) / C);
}

console.log(answer);
