const input = +require("fs").readFileSync("/dev/stdin").toString();
let answer = "";

for (let i = input; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    answer += "*";
  }
  answer += "\n";
}

console.log(answer);
