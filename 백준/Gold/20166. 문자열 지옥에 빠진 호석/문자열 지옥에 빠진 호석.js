const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M, K] = input.shift().split(" ").map(Number);
const board = [];
const answer = [];
let cnt = 0;

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

const dfs = (x, y, depth, visited, str) => {
  if (depth === str.length - 1) {
    return 1;
  }

  const key = `${x}${y}${depth}`;

  let count = 0;

  for (let [dx, dy] of dt) {
    const [newX, newY] = [(x + dx + N) % N, (y + dy + M) % M];
    if (!visited[newX][newY] && board[newX][newY] === str[depth + 1]) {
      visited[newX][newY] = 1;
      count += dfs(newX, newY, depth + 1, visited, str);
      visited[newX][newY] = 0;
    }
  }

  return count;
};

for (const str of input) {
  if (memo[str]) {
    answer.push(memo[str]);
    continue;
  }

  let cnt = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      // 문제의 첫글자와 일치하는 지점을 만나면 dfs 수행
      if (board[i][j] === str[0]) {
        const visited = Array.from(Array(N), () => Array(M).fill(0));
        cnt += dfs(i, j, 0, visited, str);
      }
    }
  }
  memo[str] = cnt;
  answer.push(cnt);
}

console.log(answer.join("\n"));
