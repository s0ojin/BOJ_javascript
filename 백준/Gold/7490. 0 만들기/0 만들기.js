const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);


input.shift();
const operator = [" ", "+", "-"];
const temp = [];

input.forEach((v, i) => {
  const sequence = [];
  for (let i = 1; i <= v; i++) {
    sequence.push(i);
  }

  dfs(0, v - 1, sequence);
  if (i !== input.length - 1) {
    console.log();
  }
});

function dfs(depth, N, sequence) {
  if (depth === N) {
    if (eval(makeExpression(sequence, temp).replace(/ /g, "")) === 0) {
      return console.log(makeExpression(sequence, temp));
    } else return;
  }

  for (let i = 0; i < operator.length; i++) {
    temp.push(operator[i]);
    dfs(depth + 1, N, sequence);
    temp.pop();
  }
}

function makeExpression(sequence, operators) {
  return sequence
    .reduce((result, val, idx) => {
      return result.concat(val, operators[idx] || []);
    }, [])
    .join("");
}
