const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const board = input.map((row) => row.split(""));

const whiteBoard = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
].map((row) => row.split(""));

const blackBoard = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
].map((row) => row.split(""));

const check = (newBoard) => {
  let whiteCount = 0;
  let blackCount = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (newBoard[i][j] !== whiteBoard[i][j]) {
        whiteCount++;
      }
      if (newBoard[i][j] !== blackBoard[i][j]) {
        blackCount++;
      }
    }
  }
  return [whiteCount, blackCount];
};

let minWhite = Infinity;
let minBlack = Infinity;

for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    let chessBoard = board.slice(i, i + 8);
    chessBoard = chessBoard.map((row) => row.slice(j, j + 8));
    const [white, black] = check(chessBoard);
    minBlack = minBlack > black ? black : minBlack;
    minWhite = minWhite > white ? white : minWhite;
  }
}

console.log(Math.min(minBlack, minWhite));
