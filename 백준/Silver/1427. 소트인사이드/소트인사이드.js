const input = require("fs").readFileSync("/dev/stdin").toString().trim();

console.log(
  input
    .split("")
    .map(Number)
    .sort((a, b) => b - a)
    .join("")
);
