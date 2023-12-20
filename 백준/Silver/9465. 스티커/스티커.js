const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");


const T = +input.shift();

for (let i = 0; i < T; i++) {
  const n = +input[i * 3];
  const top = input[i * 3 + 1].split(" ").map(Number);
  const bottom = input[i * 3 + 2].split(" ").map(Number);
  const dp = [[0, top[0], bottom[0]]];

  for (let j = 1; j < n; j++) {
    dp[j] = [
      //하나도 안뗌
      Math.max(...dp[j - 1]),
      //위에 뗌
      Math.max(dp[j - 1][0], dp[j - 1][2]) + top[j],
      //아래 뗌
      Math.max(dp[j - 1][0], dp[j - 1][1]) + bottom[j],
    ];
  }

  console.log(Math.max(...dp.flat()));
}
