const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);

let A = [];
let B = [];

for (let i = 1; i <= input.length - 1; i++) {
  const row = input[i].split(" ").map(Number);
  if (i <= N) {
    A.push(row);
  }
  if (i > N) {
    B.push(row);
  }
}

const sumMetrix = A.map((row, rowIndex) =>
  row.map((num, index) => num + B[rowIndex][index])
);

let printArray = [];

sumMetrix.forEach((row) => printArray.push(row.join(" ")));

console.log(printArray.join("\n"));