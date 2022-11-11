// 1. 단어를 순회하며 새배열에 해당 알파벳이 없으면서 직전 알파벳과 일치하지 않으면 counter++;
// 2. 전체 갯수에서 그룹단어가 아닌 갯수(counter) 빼기

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let counter = 0;

for (let i = 1; i <= input[0]; i++ ) {
    let newArray = [];
    const word = input[i].split('');
    
    for(let j = 0; j < word.length; j++) {
        if (!newArray.includes(word[j])) {
            newArray.push(word[j]);
        }
        else if (word[j] !== word[j-1]) {
            counter++;
            break;
        }
    }
}

console.log(input[0]-counter);