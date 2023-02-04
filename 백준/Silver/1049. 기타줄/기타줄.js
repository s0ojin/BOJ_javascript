const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const prices = input.map((item) => item.split(" ").map(Number));

const cost = [];
let setMin = Infinity;
let unitMin = Infinity;
let set = 1;

for (let i = 0; i < M; i++) {
  const [setPrice, unitPrice] = prices[i];

  setMin = setPrice < setMin ? setPrice : setMin;
  unitMin = unitPrice < unitMin ? unitPrice : unitMin;

  if (N > 6) {
    set = Math.floor(N / 6);
  }

  cost.push(unitPrice * N);
  cost.push(setPrice * (set + 1));
}


cost.push(setMin * set + unitMin * (N % 6));
console.log(Math.min(...cost));