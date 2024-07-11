def solution(maps):
    answer = 0
    N, M = len(maps), len(maps[0])
    visited = [[0]*M for _ in range(N)]
    
    def in_range(x,y):
        nonlocal N, M
        return 0<=x<N and 0<=y<M
    
    
    def bfs(x,y):
        queue = []
        queue.append((x,y))

        visited[x][y] = 1
        
        while queue:
            cx, cy = queue.pop(0)
            for dx, dy in [(-1,0),(1,0),(0,-1),(0,1)]:
                nx, ny = cx+dx, cy+dy
                if in_range(nx,ny) and maps[nx][ny] and not visited[nx][ny]:
                    queue.append((nx,ny))
                    visited[nx][ny] = visited[cx][cy] + 1

    bfs(0,0)
    if visited[N-1][M-1]:
        answer = visited[N-1][M-1]
    else:
        answer = -1
    return answer