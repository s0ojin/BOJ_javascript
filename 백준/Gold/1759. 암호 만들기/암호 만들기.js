const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [L, C] = input.shift().split(" ").map(Number);
const alphabet = input[0].split(" ").sort();
const password = [];
const vowel = ["a", "e", "i", "o", "u"];

function dfs(depth, start) {
  if (depth === L) {
    // 모음 갯수 카운트
    let cnt = 0;
    password.forEach((v) => {
      if (vowel.includes(v)) {
        cnt++;
      }
    });

    if (cnt >= 1 && L - cnt >= 2) console.log(password.join(""));
    return;
  }

  for (let i = start; i < C; i++) {
    if (!password.includes(alphabet[i])) {
      password.push(alphabet[i]);
      start++;
      dfs(depth + 1, start);
      password.pop();
    }
  }
}

dfs(0, 0);
