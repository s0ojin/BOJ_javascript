const [T, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.forEach((str) => {
  console.log(`${str[0]}${str[str.length - 1]}`);
});
