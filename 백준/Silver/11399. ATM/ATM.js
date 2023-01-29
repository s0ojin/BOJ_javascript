const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

const people = input[0].split(" ").map(Number);

people.sort((a, b) => a - b);

let sum = 0;

for (let i = 0; i < N; i++) {
  let partial_sum = 0;
  for (let j = 0; j <= i; j++) {
    partial_sum += people[j];
  }
  sum += partial_sum;
}

console.log(sum);