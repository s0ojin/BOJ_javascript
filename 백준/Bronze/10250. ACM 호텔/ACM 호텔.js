const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = +input[0];

for (let i = 1; i <= T; i++) {
  const [H, W, N] = input[i].split(" ").map(Number);

  const room = parseInt(N / H);
  const floor = N % H;

  if (floor === 0) {
    console.log(room + H * 100);
  } else {
    console.log(room + 1 + floor * 100);
  }
}