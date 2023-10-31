const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let answer = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === "U" && answer.length === 0) {
    answer[0] = "U";
  }
  if (input[i] === "C" && answer.length === 1) {
    answer[1] = "C";
  }
  if (input[i] === "P" && answer.length === 2) {
    answer[2] = "P";
  }
  if (input[i] === "C" && answer.length === 3) {
    answer[3] = "C";
  }
}

console.log(answer.join("") === "UCPC" ? "I love UCPC" : "I hate UCPC");
