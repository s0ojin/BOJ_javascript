const input = +require("fs").readFileSync("/dev/stdin").toString() - 1;

let acc = 1;

for (let i = 0; i < input; i++) {
  console.log(" ".repeat(input - i) + "*".repeat(acc));
  acc += 2;
}

for (let i = input; i >= 0; i--) {
  console.log(" ".repeat(input - i) + "*".repeat(acc));
  acc -= 2;
}
