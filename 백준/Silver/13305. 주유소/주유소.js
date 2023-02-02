const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

const road = input.shift().split(" ").map(Number);

const gasPrice = input.shift().split(" ").map(Number);

let cost = 0;

let restDistance = road.reduce((acc, cur) => acc + cur);

for (let i = 0; i < N - 1; i++) {
  if (gasPrice[i] < gasPrice[i + 1]) {
    cost += gasPrice[i] * (road[i] + road[i + 1]);
    restDistance -= road[i] + road[i + 1];
  } else {
    cost += gasPrice[i] * road[i];
    restDistance -= road[i];
  }

  if (restDistance === 0) {
    break;
  }
}

console.log(cost);
