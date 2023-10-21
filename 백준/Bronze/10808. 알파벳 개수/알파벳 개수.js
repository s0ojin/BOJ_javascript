const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("");

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const counts = new Array(26).fill(0);

input.forEach((x) => {
  counts[alphabet.indexOf(x)]++;
});

console.log(counts.join(" "));
