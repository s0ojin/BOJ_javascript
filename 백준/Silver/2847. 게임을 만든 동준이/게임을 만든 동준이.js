const [N, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);


let count = 0;

for (let i = N - 1; i > 0; i--) {
  while (input[i] <= input[i - 1]) {
    count++;
    input[i - 1]--;
  }
}
console.log(count);
