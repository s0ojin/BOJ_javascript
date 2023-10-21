const [[N, M], ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((nums) => nums.trim().split(" ").map(Number));

const basket = new Array(101).fill(0);

input.forEach((nums) => {
  const [i, j, k] = nums;
  for (let x = i; x <= j; x++) {
    basket[x] = k;
  }
});

console.log(basket.slice(1, N + 1).join(" "));
