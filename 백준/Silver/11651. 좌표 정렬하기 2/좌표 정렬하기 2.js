const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

const coordArr = [];

let answer = "";

input.forEach((coord) => coordArr.push(coord.split(" ").map(Number)));

coordArr
  .sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  })
  .forEach((coord) => (answer += `${coord[0]} ${coord[1]}\n`));

console.log(answer);