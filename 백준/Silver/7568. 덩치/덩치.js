const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();

const sizeArr = [];
const answer = [];

input.forEach((size) => sizeArr.push(size.split(" ").map(Number)));

for (let i = 0; i < N; i++) {
  let count = 0;
  for (let j = 0; j < N; j++) {
    if (sizeArr[i][0] < sizeArr[j][0] && sizeArr[i][1] < sizeArr[j][1]) {
      count++;
    }
  }
  answer.push(count + 1);
}

console.log(answer.join(" "));
