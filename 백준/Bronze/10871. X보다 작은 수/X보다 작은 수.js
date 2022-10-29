const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n, x] = input[0].split(' ').map(s=>+s);
const A = input[1].split(' ').map(s=>+s)

const newArr = [];
for(let i = 0; i<n; i++) {
    if (A[i] < x) {
        newArr.push(A[i]);
    }
}

console.log(newArr.join(' '))