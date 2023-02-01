const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let A = Number(input[0]);
let B = Number(input[1]);

let count = 0;

while (true) {
  let StringB = String(B);

  if (StringB[StringB.length - 1] === "1") {
    StringB = StringB.substring(0, StringB.length - 1);
    B = Number(StringB);
    count++;
  } else {
    B = B / 2;
    count++;
  }

  if (B === A) {
    return console.log(count + 1);
  }

  if (B < 1) {
    return console.log(-1);
  }
}
