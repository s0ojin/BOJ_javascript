const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const board = [];
let max = 0;
const answer = [0, 0];

input.forEach((nums) => {
  board.push(nums.split(" ").map(Number));
});

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (board[i][j] > max) {
      max = board[i][j];
      answer[0] = i;
      answer[1] = j;
    }
  }
}

console.log(max);
console.log(`${answer[0] + 1} ${answer[1] + 1}`);
