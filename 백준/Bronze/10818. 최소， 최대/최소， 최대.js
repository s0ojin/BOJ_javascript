const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const arr = input[1].split(' ').map(Number);

console.log(Math.min(...arr)+' '+Math.max(...arr));

