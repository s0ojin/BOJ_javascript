from collections import deque

def solution(n, edge):
    adj_list = [[] for _ in range(n+1)]
    
    for start, end in edge:
        adj_list[start].append(end)
        adj_list[end].append(start)
    
    def bfs(start):
        queue = deque([])
        visited = [0] * (n+1)
        queue.append(start)
        visited[start] = 1
        
        while queue:
            cur = queue.popleft()
            for next in adj_list[cur]:
                if not visited[next]:
                    queue.append(next)
                    visited[next] = visited[cur] + 1
        
        longest_dist = max(visited)
        cnt = visited.count(longest_dist)
        return cnt

    return bfs(1)
    