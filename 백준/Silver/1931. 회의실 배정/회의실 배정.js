const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const timeTable = input.map((time) => time.split(" ").map(Number));

timeTable.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

let curEnd = 0;
let count = 0;

timeTable.forEach((time) => {
  if (time[0] >= curEnd) {
    count++;
    curEnd = time[1];
  }
});

console.log(count);
