const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

while (input.length > 1) {
  const [w, h] = input.shift().split(" ").map(Number);
  let temp = h;
  const graph = [];
  const visited = Array.from(Array(h), () => Array(w).fill(false));
  while (temp > 0) {
    graph.push(input.shift().split(" ").map(Number));
    temp--;
  }
  let count = 0;

  const dfs = (x, y) => {
    //상하좌우 왼쪽위 오른쪽위 왼쪽아래 오른쪽아래
    const dx = [0, 0, -1, 1, -1, 1, -1, 1];
    const dy = [-1, 1, 0, 0, -1, -1, 1, 1];
    visited[x][y] = true;

    for (let i = 0; i < 8; i++) {
      const [newX, newY] = [x + dx[i], y + dy[i]];
      if (newX >= 0 && newX < h && newY >= 0 && newY < w) {
        if (graph[newX][newY] === 1 && visited[newX][newY] === false) {
          dfs(newX, newY);
        }
      }
    }
  };

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (graph[i][j] === 1 && visited[i][j] === false) {
        visited[i][j] = true;
        dfs(i, j);
        count++;
      }
    }
  }

  console.log(count);
}
