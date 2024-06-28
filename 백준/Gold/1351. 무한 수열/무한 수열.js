const [N, P, Q] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
    
const dpMap = new Map();

dpMap.set(0, 1);

const dfs = (n) => {
  if (dpMap.has(n)) return dpMap.get(n);

  dpMap.set(n, dfs(Math.floor(n / P)) + dfs(Math.floor(n / Q)));
  return dpMap.get(n);
};

console.log(dfs(N));
