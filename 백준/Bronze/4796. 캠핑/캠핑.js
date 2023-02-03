const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const Case = input.map((i) => i.split(" ").map(Number));

for (let i = 0; i < Case.length; i++) {
  const [L, P, V] = Case[i];

  if (L === 0 && P === 0 && V === 0) {
    break;
  }

  const restDay = V % P > L ? L : V % P;

  console.log(`Case ${i + 1}: ${parseInt(V / P) * L + restDay}`);
}
