const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(input.reduce((acc, cur) => acc + cur ** 2, 0) % 10);
