const input = +require("fs").readFileSync("/dev/stdin").toString();

for (let i = 1; i < input; i++) {
  console.log("*".repeat(i) + " ".repeat(2 * (input - i)) + "*".repeat(i));
}

for (let i = input; i > 0; i--) {
  console.log("*".repeat(i) + " ".repeat(2 * (input - i)) + "*".repeat(i));
}
