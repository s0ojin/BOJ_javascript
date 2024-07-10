def solution(n, computers):
    answer = 0
    visited = [0] * n
    
    def dfs(cur):
        for next in range(n):
            if computers[cur][next] and not visited[next]:
                visited[next] = 1
                dfs(next)
        
    for node in range(n):
        if not visited[node]:
            answer += 1
            dfs(node)
            
    
    return answer
