const fs = require('fs');
let N = +fs.readFileSync('/dev/stdin').toString();

let newNum = N;
let count = 0;

//원래 값의 일의자리 + 더한 값의 일의자리
while (N !== newNum || count ===0) {
    newNum = (newNum%10) * 10 + (parseInt(newNum/10) + (newNum%10)) % 10;
    count++;
}

console.log(count);