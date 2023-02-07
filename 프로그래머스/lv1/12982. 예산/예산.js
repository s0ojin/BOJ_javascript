function solution(d, budget) {
    let answer = 0;
    
    d.sort((a,b)=>a-b);
    
    d.forEach((cost)=>{
        if (cost <= budget) {
            answer++;
            budget = budget-cost;
        }
    })
    
    
    return answer;
}