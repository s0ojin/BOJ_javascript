const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (string of input) {
  const stack = [];
  let valid = true;

  if (string === ".") {
    break;
  }

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(" || string[i] === "[") {
      stack.push(string[i]);
      continue;
    }
    if (string[i] === ")") {
      if (stack.pop() !== "(") {
        valid = false;
        console.log("no");
        break;
      }
      continue;
    }
    if (string[i] === "]") {
      if (stack.pop() !== "[") {
        valid = false;
        console.log("no");
        break;
      }
      continue;
    }
  }

  if (valid) {
    stack.length === 0 ? console.log("yes") : console.log("no");
  }
}
