const input = +require("fs").readFileSync("dev/stdin").toString();

const Fibo = [0, 1];

for (let i = 2; i <= 45; i++) {
  Fibo[i] = Fibo[i - 1] + Fibo[i - 2];
}

console.log(Fibo[input]);
