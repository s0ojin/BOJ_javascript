// 1. 모든 크로아티아 글자는 아무 한글자로 대체한다
// 2. 바꾼 문자열의 길이 반환

const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const croatia = ['c=','c-','dz=','d-','lj','nj','s=','z='];

let newString = input;

for(let croatiaLetter of croatia) {
    newString = newString.split(croatiaLetter).join('A');
}

console.log(newString.length);
