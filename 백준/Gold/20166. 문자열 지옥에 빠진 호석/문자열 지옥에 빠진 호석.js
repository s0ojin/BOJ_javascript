const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M, K] = input.shift().split(" ").map(Number);
const board = [];
const answer = [];

for (let i = 0; i < N; i++) {
  const row = input.shift().split("");
  board.push(row);
}

const dt = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
  [-1, -1],
  [1, 1],
  [-1, 1],
  [1, -1],
];

const memo = {};

const dfs = (x, y, depth, str) => {
  if (depth === str.length) {
    return 1;
  }

  let count = 0;

  for (let [dx, dy] of dt) {
    const [newX, newY] = [(x + dx + N) % N, (y + dy + M) % M];
    if (board[newX][newY] === str[depth]) {
      count += dfs(newX, newY, depth + 1, str);
    }
  }

  return count;
};

for (const str of input) {
  if (memo[str] !== undefined) {
    answer.push(memo[str]);
    continue;
  }

  let cnt = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === str[0]) {
        cnt += dfs(i, j, 1, str);
      }
    }
  }
  memo[str] = cnt;
  answer.push(cnt);
}

console.log(answer.join("\n"));
