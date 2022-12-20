const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const answer = [];

for (let side of input) {
  const [a, b, c] = side.split(" ").map(Number);
  const max = Math.max(a, b, c);

  if (a === max && b !== max && c !== max) {
    if (a ** 2 === b ** 2 + c ** 2) {
      answer.push("right");
    } else {
      answer.push("wrong");
    }
  }
  if (b === max && a !== max && c !== max) {
    if (b ** 2 === a ** 2 + c ** 2) {
      answer.push("right");
    } else {
      answer.push("wrong");
    }
  }
  if (c === max && b !== max && a !== max) {
    if (c ** 2 === b ** 2 + a ** 2) {
      answer.push("right");
    } else {
      answer.push("wrong");
    }
  }
}

console.log(answer.join("\n"));
