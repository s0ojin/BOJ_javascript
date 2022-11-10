// 1. 갯수 세는 0으로 이루어진 배열 생성
// 2. input을 다 대문자로 바꾸고 charCodeAt - 65 로 알바벳 위치 인덱스 찾기
// 3. input 순회하며 나온 알파벳의 카운트 배열 인덱스를 1씩 추가하기
// 4. 카운트배열에서 가장 큰 수찾고, 유일하면 해당하는 알파벳 대문자 반환, 중복되면 ? 반환

const input = require('fs').readFileSync('/dev/stdin').toString();
const inputUpper = input.toUpperCase();
let countArr = Array(26).fill(0);

for (let i = 0; i<input.length; i++) {
    let alphabetIndex = inputUpper.charCodeAt(i) - 65;
    countArr[alphabetIndex]++;
}

const max = Math.max(...countArr);
const firstMaxIndex = countArr.indexOf(max);

const isUnique = () => {
    if(countArr.lastIndexOf(max) === firstMaxIndex) {
        return true;
    }
    return false
}

console.log(isUnique() ? String.fromCharCode(firstMaxIndex + 65) : '?');


