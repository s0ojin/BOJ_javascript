const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');


const N = Number(input[0]);
const scoreArr = input[1].split(' ').map(Number);
const maxScore = Math.max(...scoreArr);
const newScoreSum = scoreArr.reduce((arr,cur)=>{return arr += cur/maxScore*100}, 0);

console.log(newScoreSum/N);