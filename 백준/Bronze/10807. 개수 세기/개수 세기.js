const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const v = Number(input[2]);
const array = input[1].split(' ').map(s=>+s);

const filteredArray = array.filter(n => n === v);

console.log(filteredArray.length);