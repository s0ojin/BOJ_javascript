const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

let answer = [];
for (let i = 1; i <= 30; i++) {
   if(!input.includes(i)) {
       answer.push(i);
   }
}

console.log(answer.join('\n'));
