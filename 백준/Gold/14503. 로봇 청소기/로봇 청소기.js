const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

let [r, c, d] = input.shift().split(" ").map(Number);

const map = [];

input.forEach((rows) => {
  map.push(rows.split(" ").map(Number));
});

let count = 0;

const leftr = [0, -1, 0, 1];
const leftc = [-1, 0, 1, 0];

const backr = [1, 0, -1, 0];
const backc = [0, -1, 0, 1];

const nextDir = (d) => {
  return d === 0 ? 3 : d - 1;
};

while (true) {
  //현재 위치를 청소한다.
  if (map[r][c] === 0) {
    map[r][c] = 2;
    count++;
  }

  //네 방향 모두 청소가 이미 되어있거나 벽인 경우에는,
  if (
    (map[r][c - 1] === 1 || map[r][c - 1] === 2) &&
    (map[r][c + 1] === 1 || map[r][c + 1] === 2) &&
    (map[r - 1][c] === 1 || map[r - 1][c] === 2) &&
    (map[r + 1][c] === 1 || map[r + 1][c] === 2)
  ) {
    //바라보는 방향을 유지한 채로 한 칸 후진을 하고 2번으로 돌아간다.
    r = r + backr[d];
    c = c + backc[d];

    //뒤쪽 방향이 벽이라 후진도 할 수 없는 경우에는 작동을 멈춘다.
    if (map[r][c] === 1) break;

    continue;
  }

  while (true) {
    //왼쪽 방향에 아직 청소하지 않은 공간이 존재한다면,
    if (map[r + leftr[d]][c + leftc[d]] === 0) {
      //그 방향으로 회전한 다음 한 칸을 전진하고 1번부터 진행한다.
      r = r + leftr[d];
      c = c + leftc[d];
      d = nextDir(d);
      break;
    } else {
      //왼쪽 방향에 청소할 공간이 없다면, 그 방향으로 회전하고 2번으로 돌아간다.
      d = nextDir(d);
    }
  }
}

console.log(count);
