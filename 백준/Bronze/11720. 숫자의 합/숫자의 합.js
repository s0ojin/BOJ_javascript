const fs = require('fs');
const [N,numbers] = fs.readFileSync('/dev/stdin').toString().split('\n');

const numbersArr = numbers.split('');

console.log(numbersArr.reduce((acc,cur)=>acc+ +cur,0));