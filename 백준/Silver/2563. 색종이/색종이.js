const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

let paper = Array.from(Array(100), () => Array(100).fill(0));

let answer = 0;

for (let i = 0; i < N; i++) {
  const [left, bottom] = input[i].split(" ").map(Number);

  for (let j = left; j < left + 10; j++) {
    for (let k = bottom; k < bottom + 10; k++) {
      if (paper[j][k] === 0) {
        paper[j][k] = 1;
        answer++;
      }
    }
  }
}

console.log(answer);
