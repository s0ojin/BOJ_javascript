const input = require("fs").readFileSync("/dev/stdin").toString();

let answer = "";

for (let i = 0; i < input.length; i++) {
  answer += input[i];
  if (i % 10 === 9) {
    answer += "\n";
  }
}

console.log(answer);
