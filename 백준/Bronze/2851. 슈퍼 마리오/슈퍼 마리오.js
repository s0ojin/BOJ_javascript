const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);


let acc = 0;

for (let i = 0; i < input.length; i++) {
  acc += input[i];

  if (acc >= 100) {
    return acc - 100 > Math.abs(acc - input[i] - 100)
      ? console.log(acc - input[i])
      : console.log(acc);
  }
}

console.log(acc);
