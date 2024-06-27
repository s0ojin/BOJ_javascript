const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [K, L] = input.shift().split(" ").map(Number);

const dict = new Map();

for (const i in input) {
  if (dict.has(input[i])) {
    dict.delete(input[i]);
    dict.set(input[i]);
  } else {
    dict.set(input[i]);
  }
}

const result = Array.from(dict, ([key, _]) => key);
console.log(result.filter((el, idx) => idx < K).join("\n"));
