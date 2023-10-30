let [N, input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");


input = input.split(/S|LL/g);

console.log(Math.min(input.length, N));
