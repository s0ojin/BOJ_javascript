
from collections import deque

def bfs(start):
    queue = deque([start])
    
    while queue:
        v = queue.popleft()
        if v not in graph:
            continue
        for new_v in graph[v]:
            if not visited[new_v]:
                visited[new_v] = visited[v] + 1
                queue.append(new_v)

for tc in range(1, 11):
    N, start_node = map(int, input().split())
    edges = list(map(int, input().split()))
    graph = {}
    visited = [0] * 101
    answer = 0

    for i in range(0, N, 2):
        from_node = edges[i]
        to_node = edges[i+1] 
        if from_node in graph:
            graph[from_node].append(to_node)
        else:
            graph[from_node] = [to_node]

    visited[start_node] = 1
    bfs(start_node)
    max_depth = max(visited)

    for i in range(100, -1, -1):
        if visited[i] == max_depth:
            answer = i
            break

    print(f'#{tc} {answer}')
