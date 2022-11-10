// 1. 단어와 숫자를 연결하는 사전 만들기
// 2. input 순회하며 사전에서 해당하는 숫자찾으면 time에 더하기 할당

const input = require('fs').readFileSync('/dev/stdin').toString();

const dictionary = {
    2: 'ABC',
    3: 'DEF',
    4: 'GHI',
    5: 'JKL',
    6: 'MNO',
    7: 'PQRS',
    8: 'TUV',
    9: 'WXYZ'
}

let time = 0 ;

for (let spelling of input) {
    for(let i = 2; i<=9; i++) {
        dictionary[i].includes(spelling) ? time += i+1 : null
    }
}

console.log(time);

