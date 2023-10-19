const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let answer = 0;

input.forEach((num) => {
  answer += num ** 2;
});

console.log(answer % 10);
