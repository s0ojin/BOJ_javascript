const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const N = input.shift()[0];
const answer = new Array(N + 1).fill(0);
const adjacencyList = new Array(N + 1).fill().map(() => []);

input.forEach((v) => {
  adjacencyList[v[0]].push(v[1]);
  adjacencyList[v[1]].push(v[0]);
});

function bfs(start) {
  const visited = new Array(N);
  const queue = [start];

  while (queue.length) {
    const cur = queue.shift();

    for (let i = 0; i < adjacencyList[cur].length; i++) {
      const next = adjacencyList[cur][i];

      if (!visited[next]) {
        visited[next] = 1;
        answer[next] = cur;
        queue.push(next);
      }
    }
  }
}

bfs(1);
console.log(answer.slice(2).join("\n"));
