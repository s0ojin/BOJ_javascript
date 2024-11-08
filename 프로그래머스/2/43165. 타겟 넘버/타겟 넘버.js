function solution(numbers, target) {
    let answer = 0;
    
    
    const dfs = (cur_idx, sum) => {
        if (cur_idx === numbers.length) {
            if (sum === target) answer+=1
            return
        }
        
        // 더하기
        dfs(cur_idx+1, sum+numbers[cur_idx])
        // 빼기
        dfs(cur_idx+1, sum-numbers[cur_idx])
    }
    
    dfs(0,0)
    
    
    return answer;
}