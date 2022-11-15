let [A, B, V] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number)

console.log(Math.ceil((V - B) / (A - B)));