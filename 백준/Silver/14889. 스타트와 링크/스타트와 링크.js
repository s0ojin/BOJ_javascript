// 시험 감독

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const sMap = input.map((i) => i.split(" ").map(Number));

const check = Array(N).fill(false);
const teamStart = [];
let teamRink = [];

let min = Infinity;

const teamMaker = (index, visited) => {
  if (visited === N / 2) {
    teamRink = restTeam(teamStart);
    min = Math.min(min, Math.abs(getSum(teamStart) - getSum(teamRink)));
    return;
  }

  for (let i = index; i < N; i++) {
    if (check[i]) {
      continue;
    }

    check[i] = true;
    teamStart.push(i);
    teamMaker(i, visited + 1);
    teamStart.pop();
    check[i] = false;
  }
};

const restTeam = (teamStart) => {
  const result = [];
  for (let i = 0; i < N; i++) {
    if (!teamStart.includes(i)) {
      result.push(i);
    }
  }
  return result;
};

const getSum = (team) => {
  let sum = 0;

  // 팀내에서 2명씩 짝짓는 경우의 수 모두구해 더해야함
  for (let i = 0; i < team.length; i++) {
    for (let j = 0; j < team.length; j++) {
      if (i !== j) sum += sMap[team[i]][team[j]];
    }
  }
  return sum;
};

teamMaker(0, 0);

console.log(min);
