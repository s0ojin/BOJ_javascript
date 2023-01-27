const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const string = input.map((i) => i.split(" "));

for (let i = 0; i < string.length; i++) {
  const s = string[i][0];
  const t = string[i][1];

  const queueS = s.split("");

  for (spell of t) {
    if (spell === queueS[0]) {
      queueS.shift();
    }
  }

  console.log(queueS.length === 0 ? "Yes" : "No");
}