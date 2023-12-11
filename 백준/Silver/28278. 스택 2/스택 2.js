const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

input.shift();

const stack = [];
let answer = "";

const commands = input.map((v) => v.split(" ").map(Number));

commands.forEach((v) => {
  switch (v[0]) {
    //push
    case 1:
      stack.push(v[1]);
      break;

    //pop
    case 2:
      if (stack.length !== 0) {
        answer += stack.pop() + "\n";
      } else {
        answer += -1 + "\n";
      }
      break;

    //length
    case 3:
      answer += stack.length + "\n";
      break;

    //empty
    case 4:
      if (stack.length === 0) {
        answer += 1 + "\n";
      } else {
        answer += 0 + "\n";
      }
      break;

    //top
    case 5:
      if (stack.length !== 0) {
        answer += stack[stack.length - 1] + "\n";
      } else {
        answer += -1 + "\n";
      }
  }
});

console.log(answer.trim());
