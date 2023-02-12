const input = require("fs").readFileSync("/dev/stdin").toString();

let n = 1;
let num = 666;

while (true) {
  if (Number(input) === 1) {
    console.log(num);
    break;
  }

  num++;

  if (String(num).includes("666")) {
    n++;
  }

  if (n === Number(input)) {
    console.log(num);
    break;
  }
}
