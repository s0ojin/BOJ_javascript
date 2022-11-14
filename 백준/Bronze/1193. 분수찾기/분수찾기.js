const N = require('fs').readFileSync('/dev/stdin');

let sum = 0;
let i = 0;

while (sum < N) {
  sum += i;
  i++;
}

const group = i - 1;
const location = group - (sum - N) - 1;

//그룹이 짝수면 분자는 커지고, 분모는 작아짐
if (group % 2 === 0) {
  let Numerator = 1;
  let Denominator = group;
  Denominator -= 1 * location;
  Numerator += 1 * location;
  return console.log(`${Numerator}/${Denominator}`);
}
//그룹이 홀수면 분자는 작아지고, 분모는 커짐
if (group % 2 !== 0) {
  let Numerator = group;
  let Denominator = 1;
  Denominator += 1 * location;
  Numerator -= 1 * location;
  return console.log(`${Numerator}/${Denominator}`);
}
