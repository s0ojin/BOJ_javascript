const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

input.forEach((string) => {
  const stack = [];
  let result = "YES";

  for (let el of string) {
    if (el === "(") {
      stack.push(el);
    }
    if (el === ")") {
      if (stack.pop() === undefined) {
        result = "NO";
      }
    }
  }

  if (stack.length !== 0) {
    result = "NO";
  }

  console.log(result);
});