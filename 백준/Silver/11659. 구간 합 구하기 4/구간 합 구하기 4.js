const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");


input.shift();

const arr = input.shift().split(" ").map(Number);
const acc = Array.from({ length: arr.length + 1 }, () => 0);
let answer = [];

arr.forEach((v, i) => {
  acc[i + 1] = acc[i] + v;
});

for (let i = 0; i < input.length; i++) {
  let [start, end] = input[i].split(" ").map(Number);
  answer.push(acc[end] - acc[start - 1]);
}

console.log(answer.join("\n"));
