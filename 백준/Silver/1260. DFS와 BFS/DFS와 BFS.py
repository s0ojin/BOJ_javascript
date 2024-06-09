
N, M, V = map(int,input().split())

adj_list = list([] for _ in range(N+1))

for el in range(M):
    start, end = map(int, input().split())
    adj_list[start].append(end)
    adj_list[end].append(start)

# adj 오름차순 정렬
for el in adj_list:
    el.sort()



dfs_answer=[]
dfs_visited=[0]*(N+1)

def dfs(vertex):
    # 방문처리
    dfs_visited[vertex] = 1
    dfs_answer.append(vertex)

    for next in adj_list[vertex]:
        if not dfs_visited[next]:
            dfs(next)

dfs(V)


bfs_answer=[]
bfs_visited=[0]*(N+1)

def bfs(vertex):
    # 초기값 처리
    queue = []
    queue.append(vertex)
    bfs_visited[vertex] = 1
    bfs_answer.append(vertex)

    while queue:
        v = queue.pop(0)

        for el in adj_list[v]:
            if not bfs_visited[el]:
                bfs_visited[el] = 1
                bfs_answer.append(el)        
                queue.append(el)


bfs(V)


print(*dfs_answer)
print(*bfs_answer)