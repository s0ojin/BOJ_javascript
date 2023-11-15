const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((nums) => nums.split(" ").map(Number));

const winNumbers = [];

for (let i = 0; i < input.length; i++) {
  if (input[i][0] === 0) {
    break;
  }
  input[i].shift();
  const sortedArr = input[i].sort((a, b) => a - b);
  dfs(0, 0, sortedArr);
  if (i !== input.length - 2) {
    console.log();
  }
}

function dfs(depth, start, arr) {
  if (depth === 6) {
    console.log(winNumbers.join(" "));
    return;
  }

  for (let i = start; i < arr.length; i++) {
    if (!winNumbers.includes(arr[i])) {
      winNumbers.push(arr[i]);
      start++;
      dfs(depth + 1, start, arr);
      winNumbers.pop(arr[i]);
    }
  }
}
