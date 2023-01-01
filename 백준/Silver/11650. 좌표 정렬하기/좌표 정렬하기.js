const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();

const cordArr = [];

input.forEach((coord) => {
  cordArr.push(coord.split(" ").map(Number));
});

let answer = "";

cordArr
  .sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  })
  .forEach((coord) => {
    answer += `${coord[0]} ${coord[1]}\n`;
  });

console.log(answer);
