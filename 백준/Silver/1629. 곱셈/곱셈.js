const [A, B, C] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(BigInt);

function rec(num) {
  if (num === 1n) {
    return A % C;
  }

  const half = rec(num / 2n) % C;

  if (num % 2n) {
    return (half * half * A) % C;
  }

  return half * half % C;
}

console.log(String(rec(B)));
