const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [N, nums] = [input.shift(), input];

const Average = (nums) => {
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  const answer = Math.round(sum / N);

  return console.log(answer === -0 ? 0 : answer);
};

const Median = (nums) => {
  const sortednums = nums.sort((a, b) => a - b);
  const middleIndex = Math.floor(nums.length / 2);

  return console.log(sortednums[middleIndex]);
};

const Mode = (nums) => {
  // count만들기
  const count = nums.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  // 최빈값 구하기, 여러개면 두번째로 작은 수
  const max = Math.max(...Object.values(count));
  const maxArr = [];
  for (let key in count) {
    if (count[key] === max) maxArr.push(key);
  }

  return console.log(
    maxArr.length === 1 ? maxArr[0] : maxArr.sort((a, b) => a - b)[1]
  );
};

const Range = (nums) => {
  const max = Math.max(...nums);
  const min = Math.min(...nums);

  return console.log(max - min);
};

Average(nums);
Median(nums);
Mode(nums);
Range(nums);
