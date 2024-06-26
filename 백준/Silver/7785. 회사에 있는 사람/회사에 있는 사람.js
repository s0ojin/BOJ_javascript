const [N, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const dict = {};

for (let i = 0; i < N; i++) {
  const [name, status] = input[i].split(" ");
  dict[name] = status;
}

const result = [];

for (const key in dict) {
  if (dict[key] === "enter") {
    result.push(key);
  }
}

console.log(result.sort((a, b) => (a > b ? -1 : 1)).join("\n"));
