const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString());


for(let i=1; i<=input; i++) {
    console.log(' '.repeat(input-i)+'*'.repeat(i));
}