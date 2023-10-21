const input = +require("fs").readFileSync("/dev/stdin").toString();

for (let i = input; i > 0; i--) {
  console.log(" ".repeat(input - i) + "*".repeat(2 * i - 1));
}
