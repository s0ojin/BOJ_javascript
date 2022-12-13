// 가장 짧은 문자거리
// input : teachermode e
// output : 1 0 1 2 1 0 1 2 2 1 0

const [s, t] = "teachermode e".split(" ");

const stringArr = s.split("");

const answer = [];
let distance = 0;

for (let letter of stringArr) {
  if (letter === t) {
    distance = 0;
    answer.push(distance);
  }

  if (letter !== t) {
    distance++;
    answer.push(distance);
  }
}

for (let i = stringArr.length - 1; i >= 0; i--) {
  const letter = stringArr[i];
  if (letter === t) {
    distance = 0;
    answer[i] = distance;
  }

  if (letter !== t) {
    distance++;
    answer[i] = Math.min(answer[i], distance);
  }
}

console.log(answer.join(" "));
