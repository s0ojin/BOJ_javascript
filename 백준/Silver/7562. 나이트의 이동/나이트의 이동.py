def bfs(si,sj):
    queue = []
    queue.append((si,sj))

    if si == ei and sj == ej:
        return

    while queue:
        ci, cj = queue.pop(0)
        for di,dj in [(-1,-2),(-2,-1),(-2,1),(-1,2),(1,-2),(2,-1),(2,1),(1,2)]:
            ni, nj = ci+di, cj+dj
            
            if 0<=ni<N and 0<=nj<N and not visited[ni][nj]:
                visited[ni][nj] = visited[ci][cj]+1
                queue.append((ni,nj))

TC = int(input())

for tc in range(TC):
    N = int(input())
    visited = [[0]*N for _ in range(N)]
    (si, sj) = map(int, input().split())
    (ei, ej) = map(int, input().split())

    bfs(si,sj)
    print(visited[ei][ej])

