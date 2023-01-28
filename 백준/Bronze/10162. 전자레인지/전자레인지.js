const input = require("fs").readFileSync("/dev/stdin").toString();

let T = Number(input);

const [A, B, C] = [300, 60, 10];

const count = [0, 0, 0];

while (T >= 10) {
  if (T / A >= 1) {
    count[0] += Math.floor(T / A);
    T = T % A;
  } else if (T / B >= 1) {
    count[1] += Math.floor(T / B);
    T = T % B;
  } else if (T / C >= 1) {
    count[2] += Math.floor(T / C);
    T = T % C;
  }
}

if (T === 0) {
  console.log(count.join(" "));
} else {
  console.log(-1);
}