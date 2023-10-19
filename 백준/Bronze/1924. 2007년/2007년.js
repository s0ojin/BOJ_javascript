const [month, day] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const dayOfTheWeek = {
  1: "MON",
  2: "TUE",
  3: "WED",
  4: "THU",
  5: "FRI",
  6: "SAT",
  0: "SUN",
};

const countOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let today = 0;

for (let i = 0; i < month - 1; i++) {
  today += countOfDays[i];
}

today += day;

console.log(dayOfTheWeek[today % 7]);
