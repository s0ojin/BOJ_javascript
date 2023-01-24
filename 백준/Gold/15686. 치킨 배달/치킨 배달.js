const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const map = Array.from(Array(1), () => Array(N + 1).fill(0));

input.forEach((row) => {
  row = row.split(" ").map(Number);
  row.unshift(0);
  map.push(row);
});

const homes = [];
const chicken = [];

for (let i = 0; i <= N; i++) {
  for (let j = 0; j <= N; j++) {
    if (map[i][j] === 1) {
      homes.push([i, j]);
    }
    if (map[i][j] === 2) {
      chicken.push([i, j]);
    }
  }
}

const getDistance = () => {
  let sum = 0;
  homes.forEach((home) => {
    let min = Infinity;
    chicken.forEach((chick, index) => {
      if (check[index] === true) {
        min = Math.min(
          min,
          Math.abs(home[0] - chick[0]) + Math.abs(home[1] - chick[1])
        );
      }
    });
    sum += min;
  });
  return sum;
};

const check = Array(chicken.length).fill(false);
let answer = Infinity;

const pickChicken = (startIndex, chickIndex) => {
  if (chickIndex === M) {
    answer = Math.min(answer, getDistance());
  } else {
    for (let i = startIndex; i < chicken.length; i++) {
      if (check[i] === true) {
        continue;
      }
      check[i] = true;
      pickChicken(i, chickIndex + 1);
      check[i] = false;
    }
  }
};

pickChicken(0, 0);
console.log(answer);
