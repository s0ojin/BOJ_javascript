const [A, B, C] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const multiplication = A * B * C;

const dict = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
};

multiplication
  .toString()
  .split("")
  .map((num) => {
    dict[num] += 1;
  });

Object.keys(dict).map((result) => console.log(dict[result]));
