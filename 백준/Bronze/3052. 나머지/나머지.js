const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const remainderArr = input.map(num=>num%42);

const removeOverlap = new Set(remainderArr);

console.log(removeOverlap.size);

