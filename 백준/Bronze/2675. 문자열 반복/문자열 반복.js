const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

for (let i = 1; i<=input[0]; i++) {
    const [R,S] = input[i].split(' ');
    const SArr = S.split('');
    const newString = SArr.map(item=>item.repeat(R));
    console.log(newString.join(''));
}