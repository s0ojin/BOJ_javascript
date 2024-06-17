N, M = map(int, input().split())
adj_list = [[] for _ in range(N)]
visited = [0] * N
answer = 0

for i in range(M):
    s, e = map(int, input().split())
    adj_list[s].append(e)
    adj_list[e].append(s)

def dfs(depth, cur):
    global answer

    if answer == 1:
        return

    if depth == 5:
        answer = 1
        return
    
    for node in adj_list[cur]:
        if not visited[node]:
            visited[node] = 1
            dfs(depth+1, node)
            visited[node] = 0

for i in range(N):
    dfs(0, i)


print(answer)