const input = +require("fs").readFileSync("/dev/stdin").toString();

function Fibo(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return Fibo(n - 1) + Fibo(n - 2);
}

console.log(Fibo(input));
