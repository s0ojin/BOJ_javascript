const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const board = input.map((s) => s.split(""));

function swapRow(i, j) {
  const newBoard = JSON.parse(JSON.stringify(board));
  const target = newBoard[i][j];

  newBoard[i][j] = newBoard[i][j + 1];
  newBoard[i][j + 1] = target;

  return newBoard;
}

function swapCol(i, j) {
  const newBoard = JSON.parse(JSON.stringify(board));
  const target = newBoard[i][j];

  newBoard[i][j] = newBoard[i + 1][j];
  newBoard[i + 1][j] = target;

  return newBoard;
}

function checkMax(board) {
  let max = 0;
  //행
  for (let i = 0; i < N; i++) {
    let max_row = 1;
    for (let j = 1; j < N; j++) {
      if (board[i][j] === board[i][j - 1]) {
        max_row++;
      } else {
        max = Math.max(max, max_row);
        max_row = 1;
      }
    }
    max = Math.max(max, max_row);
  }

  //열
  for (let i = 0; i < N; i++) {
    let max_col = 1;
    for (let j = 1; j < N; j++) {
      if (board[j][i] === board[j - 1][i]) {
        max_col++;
      } else {
        max = Math.max(max, max_col);
        max_col = 1;
      }
    }
    max = Math.max(max, max_col);
  }

  return max;
}

let answer = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (j < N - 1) {
      let newBoard = swapRow(i, j);
      answer = Math.max(checkMax(newBoard), answer);
    }

    if (i < N - 1) {
      newBoard = swapCol(i, j);
      answer = Math.max(checkMax(newBoard), answer);
    }
  }
}

console.log(answer);
