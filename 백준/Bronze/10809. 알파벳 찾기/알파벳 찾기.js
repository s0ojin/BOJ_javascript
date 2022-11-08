// indexOf() : 일치하는 요소가 배열에 있으면 첫번째 인덱스를 뱉음, 없으면 -1 반환
// fromCharCode() : 인수에 해당하는 문자를 아키코드 테이블에서 찾아 반환
// 1. 알파벳 배열 생성
// 2. 알파벳배열 순회하며 indexOf적용

const fs = require('fs');
const inputArr = fs.readFileSync('/dev/stdin').toString().split('');
let alphabetArr = [...Array(26)].map((_,i)=> String.fromCharCode(i+65).toLowerCase());

for(let i=0; i<alphabetArr.length; i++) {
    alphabetArr[i] = inputArr.indexOf(alphabetArr[i]);
}

console.log(alphabetArr.join(' '))