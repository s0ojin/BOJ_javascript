// 1. 10000개 true 배열
// 2. 1부터 10000까지 돌면서 셀프넘버가 아니면 false로 바꿈
// 3. true만 모아서 반환


let selfNum = Array(10001).fill(true);
selfNum[0] = false;

for(let i = 1; i<=10000; i++) {
    const separatedNum = (i+'').split('');
    const notSelfNum = i + separatedNum.reduce((acc, cur)=> acc+ +cur, 0);
    selfNum[notSelfNum] = false;    
}

let realSelfNum = [];

selfNum.forEach((boolean,index)=>{
    if(boolean === true) {
        realSelfNum.push(index);
    } 
})

console.log(realSelfNum.join('\n'));

