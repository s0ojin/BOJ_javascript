let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input.shift().split(" ").map(Number);

input = input.map(Number);
input.sort((a, b) => b - a);

let count = 0;
let money = K;

for (let i = 0; i < N; i++) {
  if (money / input[i] >= 1) {
    count += Math.floor(money / input[i]);
    money = money % input[i];
  }
}

console.log(count);
