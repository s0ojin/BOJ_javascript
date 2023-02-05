const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const max = [];
const min = [];

input.forEach((num) => {
  max.push(num.replace(/5/g, "6"));
  min.push(num.replace(/6/g, "5"));
});

console.log(
  `${min.reduce((acc, cur) => +acc + +cur)} ${max.reduce(
    (acc, cur) => +acc + +cur
  )}`
);
