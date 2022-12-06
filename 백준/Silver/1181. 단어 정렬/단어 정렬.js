let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

input = input.sort((a, b) => a.length - b.length || a.localeCompare(b));

input = [...new Set(input)];

console.log(input.join("\n"));
