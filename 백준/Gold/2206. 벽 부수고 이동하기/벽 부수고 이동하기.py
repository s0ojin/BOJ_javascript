from collections import deque

N, M = map(int, input().split())
board = [list(map(int, input().strip())) for _ in range(N)]
visited = [[[0]*2 for _ in range(M)] for _ in range(N)]
queue = deque([(0, 0, 0)])
visited[0][0][0] = 1
dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]

while queue:
    x, y, z = queue.popleft()
    if x == N-1 and y == M-1:
        print(visited[x][y][z])
        break
    for k in range(4):
        nx, ny = x+dx[k], y+dy[k]
        if 0 <= nx < N and 0 <= ny < M and not visited[nx][ny][z]:
            if board[nx][ny] == 0:
                visited[nx][ny][z] = visited[x][y][z] + 1
                queue.append((nx, ny, z))
            elif board[nx][ny] == 1 and not z:
                visited[nx][ny][1] = visited[x][y][0] + 1
                queue.append((nx, ny, 1))

else:
    print(-1)