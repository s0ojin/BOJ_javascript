import sys

N, M = map(int, input().split())

adj_list = [[] for _ in range(N+1)]
for _ in range(M):
    start, end = map(int, input().split())
    adj_list[start].append(end)
    adj_list[end].append(start)

def bfs(start):
    queue = []
    visited = [0] * (N+1)
    queue.append(start)
    visited[start] = 1

    while queue:
        cur = queue.pop(0)
        for next in adj_list[cur]:
            if not visited[next]:
                queue.append(next)
                visited[next] = visited[cur] + 1

    return visited

result = bfs(1)
max_val = max(result)
index = result.index(max_val)
cnt = result.count(max_val)

print(index, max_val-1, cnt)