const [N, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 두 단어를 받아 애너그램인지 확인하는 함수
function validAnagram(word1, word2) {
  // 두 단어의 길이가 다르면 false 반환
  if (word1.length !== word2.length) {
    return false;
  }

  // 첫번째 단어를 쪼개서 문자별 개수 카운팅하는 객체 생성
  const word1Counter = {};

  for (let el of word1) {
    word1Counter[el] = (word1Counter[el] || 0) + 1;
  }

  for (let el of word2) {
    // 2번째 단어의 알파벳이 word1Counter에 없으면 false
    if (!word1Counter[el]) {
      return false;
      // 있으면 -1
    } else {
      word1Counter[el] -= 1;
    }
  }

  //위 테스트를 모두 거쳐서 통과되었으면 true 반환
  return true;
}

input.map((words) => {
  const [word1, word2] = words.split(" ");
  if (validAnagram(word1, word2)) {
    console.log(`${word1} & ${word2} are anagrams.`);
  } else {
    console.log(`${word1} & ${word2} are NOT anagrams.`);
  }
});
