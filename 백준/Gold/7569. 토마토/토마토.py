from collections import deque
import sys

M, N, H = map(int, input().split())
board = [list(list(map(int, sys.stdin.readline().split())) for _ in range(N)) for _ in range(H)]

dx = [-1, 1, 0, 0, 0, 0]
dy = [0, 0, -1, 1, 0, 0]
dz = [0, 0, 0, 0, -1, 1]

queue = deque([])

for i in range(H):
    for j in range(N):
        for k in range(M):
            if board[i][j][k] == 1:
                queue.append((i, j, k))

while queue:
    z, x, y = queue.popleft()

    for k in range(6):
        nz = z + dz[k]
        nx = x + dx[k]
        ny = y + dy[k]

        if 0 <= nz < H and 0 <= nx < N and 0 <= ny < M and board[nz][nx][ny] == 0:
            queue.append((nz, nx, ny))
            board[nz][nx][ny] = board[z][x][y] + 1

count = 0
is_possible = 1
for i in range(H):
    for j in range(N):
        for k in range(M):
            if board[i][j][k] == 0:
                is_possible = 0
            count = max(count, board[i][j][k])

if is_possible:
    print(count-1)
else:
    print(-1)
