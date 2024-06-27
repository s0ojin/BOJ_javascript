const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const [S, E, Q] = input
  .shift()
  .split(" ")
  .map((el) =>
    el
      .split(":")
      .map(Number)
      .reduce((a, b) => a * 60 + b)
  );

// S보다 작거나같고 0보다 크면 입실
// E보다 크거나같고 Q보다 작거나 같으면 퇴실

const attended = new Set();
let cnt = 0;

for (let chat of input) {
  let [time, student] = chat.split(" ");
  time = time
    .split(":")
    .map(Number)
    .reduce((a, b) => a * 60 + b);

  if (0 < time && time <= S) attended.add(student);
  else if (E <= time && time <= Q && attended.has(student)) {
    cnt++;
    attended.delete(student);
  }
}

console.log(cnt);
