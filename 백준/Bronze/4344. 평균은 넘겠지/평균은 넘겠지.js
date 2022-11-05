const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');


for(let i = 0; i < +input[0]; i++) {
    let overAverage = 0;
    const [N, ...scoreArr] = input[i+1].split(' ').map(Number);
    const Average = scoreArr.reduce((arr,cur)=>arr+cur,0)/N;
    scoreArr.forEach(score=>{
        if(score > Average) {
            overAverage++;
        }
    })
    console.log((overAverage/N*100).toFixed(3)+'%');
}