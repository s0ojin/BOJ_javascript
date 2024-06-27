const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const TC = Number(input.shift());

for (let i = 0; i < TC; i++) {
  N = Number(input.shift());
  const dict = new Map();
  for (let j = 0; j < N; j++) {
    const [name, type] = input.shift().split(" ");
    if (dict.has(type)) {
      dict.get(type).push(name);
    } else {
      dict.set(type, [name]);
    }
  }

  let combinations = 1;
  for (const count of dict.values()) {
    combinations *= count.length + 1;
  }
  console.log(combinations - 1);
}
