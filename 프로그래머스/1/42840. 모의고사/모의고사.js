function solution(answers) {
    const first = [1,2,3,4,5];
    const second = [2,1,2,3,2,4,2,5];
    const third = [3,3,1,1,2,2,4,4,5,5];
    const count = [0, 0, 0];
    const answer = [];
    
    for (let i = 0; i < answers.length; i++) {
        if (first[i % 5] === answers[i]) {
            count[0] += 1;
        }
        if (second[i % 8] === answers[i]) {
            count[1] += 1;
        } 
        if (third[i % 10] === answers[i]) {
            count[2] += 1;
        }
    }
    
    const maxScore = Math.max(...count)
    for (let i = 0; i < 3; i++) {
        if (count[i] == maxScore) {
            answer.push(i+1);
        }    
    }
    
    return answer;
}