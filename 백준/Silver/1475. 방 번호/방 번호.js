const input = require("fs").readFileSync("/dev/stdin").toString().trim();

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
};

for (let i of input) {
  if (i === "9") {
    dict[6] += 1;
  } else {
    dict[i] += 1;
  }
}

dict[6] = Math.ceil(dict[6] / 2);

console.log(Math.max(...Object.values(dict)));
