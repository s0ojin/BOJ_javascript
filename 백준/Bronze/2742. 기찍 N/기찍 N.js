let input = +require('fs').readFileSync('/dev/stdin').toString();

const answer = [];

while (input > 0) {
    answer.push(input);
    input--;
}

console.log(answer.join('\n'));