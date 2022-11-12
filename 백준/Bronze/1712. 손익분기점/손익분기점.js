const [A,B,C] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);

const N = A/(C-B);

if ( C-B <= 0 ) {
    console.log(-1);
} else {
    console.log(Math.floor(N) + 1);
}



