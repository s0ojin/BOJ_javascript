const fs = require('fs');
const N = +fs.readFileSync('/dev/stdin').toString();

let isArithmetic = Array(N+1).fill(true);
isArithmetic[0] = false;

for(let num=1; num<=N; num++) {
    const seperatedNumArr = String(num).split('').map(Number);
    const d = seperatedNumArr[1]-seperatedNumArr[0];
    
    if(seperatedNumArr.length<3) {
        continue;
    } else {
        for(let i=0; i<seperatedNumArr.length-1; i++){
            if(seperatedNumArr[i+1]-seperatedNumArr[i] !== d) {
                isArithmetic[num] = false;
                break;
            } 
        }
    }
}

console.log(isArithmetic.filter(boolean=> boolean === true).length);
