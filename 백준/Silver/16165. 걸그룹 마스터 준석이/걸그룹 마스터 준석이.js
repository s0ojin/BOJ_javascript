const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const dict = new Map();
const result = [];

while (input.length > M * 2) {
  const teamName = input.shift();
  const memberCnt = Number(input.shift());
  const members = [];
  for (let i = 0; i < memberCnt; i++) {
    const member = input.shift();
    members.push(member);
    dict.set(member, teamName);
  }

  dict.set(teamName, members);
}

for (let i = 0; i <= M * 2; i += 2) {
  if (Array.isArray(dict.get(input[i]))) {
    dict
      .get(input[i])
      .sort()
      .map((el) => result.push(el));
  } else {
    result.push(dict.get(input[i]));
  }
}

console.log(result.join("\n").trim());
