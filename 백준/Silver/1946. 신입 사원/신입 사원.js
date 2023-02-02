const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

const test = [];

while (input.length > 0) {
  const N = Number(input.shift());
  const scores = input
    .splice(0, N)
    .map((i) => i.split(" ").map(Number))
    .sort((a, b) => a[0] - b[0]);

  test.push(scores);
}

test.forEach((item) => {
  let pass = 1;

  let interview = item[0][1];

  for (let i = 1; i < item.length; i++) {
    const curInterview = item[i][1];
    if (interview > curInterview) {
      pass++;
      interview = curInterview;
    }
  }

  console.log(pass);
});
