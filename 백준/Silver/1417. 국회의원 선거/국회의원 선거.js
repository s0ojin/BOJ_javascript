const [N, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let dasom = input.shift();
let count = 0;

while (Math.max(...input) >= dasom) {
  input[input.indexOf(Math.max(...input))]--;
  dasom++;
  count++;
}

console.log(count);
