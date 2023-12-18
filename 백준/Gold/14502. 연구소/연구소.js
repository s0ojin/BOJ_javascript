// 0빈칸
// 1 벽
// 2 바이러스
// 3개의 추가벽 가능

// 백트래킹으로 벽 3개가 되면
// 바이러스를 퍼뜨려서
// 안전영역 갯수를 센다.

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [N, M] = input.shift();

let safeArea = 0;

function dfs(depth) {
  if (depth === 3) {
    //안전영역 갯수세기
    let board = input.map((v) => [...v]);
    safeArea = Math.max(countSafeArea(board), safeArea);
    return;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (input[i][j] === 0) {
        input[i][j] = 1;
        dfs(depth + 1);
        input[i][j] = 0;
      }
    }
  }
}

function countSafeArea(board) {
  //상하좌우
  const queue = [];
  let count = 0;
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 2) queue.push([i, j]);
    }
  }

  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if (nx >= 0 && nx < N && ny >= 0 && ny < M && board[nx][ny] === 0) {
        board[nx][ny] = 2;
        queue.push([nx, ny]);
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 0) {
        count++;
      }
    }
  }

  return count;
}

dfs(0);
console.log(safeArea);
