const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let sum = 0;
let allScore = 0;

input.forEach((subject) => {
  let [_, score, grade] = subject.trim().split(" ");
  allScore += +score;

  if (grade === "P") {
    allScore -= score;
  } else {
    switch (grade) {
      case "A+":
        grade = 4.5;
        break;
      case "A0":
        grade = 4.0;
        break;
      case "B+":
        grade = 3.5;
        break;
      case "B0":
        grade = 3.0;
        break;
      case "C+":
        grade = 2.5;
        break;
      case "C0":
        grade = 2.0;
        break;
      case "D+":
        grade = 1.5;
        break;
      case "D0":
        grade = 1.0;
        break;
      case "F":
        grade = 0.0;
        break;
    }
    sum += +score * grade;
  }
});

console.log(sum / allScore);
