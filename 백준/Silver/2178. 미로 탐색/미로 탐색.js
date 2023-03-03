const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const maze = input.map((row) => row.split("").map(Number));
const visited = Array.from({ length: N }, () => Array(M).fill(0));

const bfs = (x, y) => {
  //상하좌우
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  const queue = [];

  queue.push([x, y]);
  visited[x][y] = 1;

  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const newX = x + dx[i];
      const newY = y + dy[i];

      if (newX >= 0 && newX < N && newY >= 0 && newY < M) {
        if (maze[newX][newY] === 1 && visited[newX][newY] === 0) {
          visited[newX][newY] = visited[x][y] + 1;
          queue.push([newX, newY]);
        }
      }
    }
  }
};

bfs(0, 0);
console.log(visited[N - 1][M - 1]);
