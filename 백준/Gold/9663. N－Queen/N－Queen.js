const input = +require("fs").readFileSync("/dev/stdin").toString().trim();

//열
const visit1 = new Array(input).fill(false);
//대각
const visit2 = new Array(input * 2 - 1).fill(false);
//대각
const visit3 = new Array(input * 2 - 1).fill(false);

let cnt = 0;

function dfs(depth) {
  if (depth === input) {
    cnt++;
    return;
  }

  for (let i = 0; i < input; i++) {
    if (visit1[i] || visit2[i + depth] || visit3[i - depth + input - 1])
      continue;
    visit1[i] = true;
    visit2[i + depth] = true;
    visit3[i - depth + input - 1] = true;
    dfs(depth + 1);
    visit1[i] = false;
    visit2[i + depth] = false;
    visit3[i - depth + input - 1] = false;
  }
}

dfs(0);
console.log(cnt);
