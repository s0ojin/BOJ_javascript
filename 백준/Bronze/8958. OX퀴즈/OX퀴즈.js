const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

for (let i = 0; i < Number(input[0]); i++) {
    let count = 0;
    let sum = 0;

    input[i+1].split('').map(item=> {
        if(item === 'O') {
            count++;
            sum += count;
        } else count = 0;
    });
    console.log(sum);
}