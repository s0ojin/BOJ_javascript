const input = +require('fs').readFileSync('/dev/stdin').toString();

const answer = [];

for( let i=1; i<=input; i++) {
    answer.push(i);
}

console.log(answer.join('\n'));

