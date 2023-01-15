const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.shift();

const book = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === 0) {
    book.pop();
  } else {
    book.push(input[i]);
  }
}

let answer = 0;

book.forEach((num) => {
  answer += num;
});

console.log(answer);