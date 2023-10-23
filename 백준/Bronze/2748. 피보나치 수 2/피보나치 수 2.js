const input = +require("fs").readFileSync("/dev/stdin").toString();

const DP = new Array(input + 1);

DP[0] = 0;
DP[1] = 1;

for (let i = 2; i < DP.length; i++) {
  DP[i] = BigInt(DP[i - 1]) + BigInt(DP[i - 2]);
}

console.log(DP[input].toString());
