const input = +require("fs").readFileSync("/dev/stdin").toString();

let newNum = 0;
let answer = 0;

for (let i = 0; i < input; i++) {
  const numArr = String(i).split("").map(Number);

  newNum = numArr.reduce((acc, cur) => acc + cur, 0) + i;

  if (newNum === input) {
    answer = i;
    break;
  }
}

console.log(answer);
