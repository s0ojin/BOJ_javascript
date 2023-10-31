const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const answer = [];
for (let i = 0; i < input.length; i++) {
  answer.push(input.slice(i));
}

console.log(answer.sort().join("\n").trim());
