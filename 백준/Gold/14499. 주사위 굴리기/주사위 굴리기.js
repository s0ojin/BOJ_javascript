const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [N, M, x, y, K] = input.shift().split(" ").map(Number);

const map = [];

for (let i = 0; i < N; i++) {
  map.push(input[i].split(" ").map(Number));
}

const commands = input[input.length - 1].split(" ").map(Number);

let dice = {
  back: 0,
  top: 0,
  front: 0,
  bottom: 0,
  left: 0,
  right: 0,
};

const diceChange = (command) => {
  const newDice = {
    back: 0,
    top: 0,
    front: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };

  switch (command) {
    case 1:
      newDice.back = dice.back;
      newDice.top = dice.right;
      newDice.front = dice.front;
      newDice.bottom = dice.left;
      newDice.left = dice.top;
      newDice.right = dice.bottom;
      break;
    case 2:
      newDice.back = dice.back;
      newDice.top = dice.left;
      newDice.front = dice.front;
      newDice.bottom = dice.right;
      newDice.left = dice.bottom;
      newDice.right = dice.top;
      break;
    case 3:
      newDice.back = dice.bottom;
      newDice.top = dice.back;
      newDice.front = dice.top;
      newDice.bottom = dice.front;
      newDice.left = dice.left;
      newDice.right = dice.right;
      break;
    case 4:
      newDice.back = dice.top;
      newDice.top = dice.front;
      newDice.front = dice.bottom;
      newDice.bottom = dice.back;
      newDice.left = dice.left;
      newDice.right = dice.right;
      break;
  }

  return newDice;
};

const moveX = [0, 0, 0, -1, 1];
const moveY = [0, 1, -1, 0, 0];

for (let i = 0; i < K; i++) {
  //맵 밖인지 아닌지확인
  let nextX = x + moveX[commands[i]];
  let nextY = y + moveY[commands[i]];

  if (map[nextX] == undefined || map[nextX][nextY] == undefined) {
    continue;
  }

  //주사위 굴리기
  dice = diceChange(commands[i]);
  x = nextX;
  y = nextY;

  //숫자 복사작업
  if (map[x][y] === 0) {
    map[x][y] = dice.bottom;
  } else {
    dice.bottom = map[x][y];
    map[x][y] = 0;
  }

  //위에있는 숫자 출력
  console.log(dice.top);
}
