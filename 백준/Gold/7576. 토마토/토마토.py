from collections import deque

M, N = map(int, input().split())
board = [list(map(int, input().split())) for _ in range(N)]
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
# 1 찾아서 넣고 시작
queue = deque([])
count = 0

for i in range(N):
    for j in range(M):
        if board[i][j] == 1:
            queue.append((i, j))


while queue:
    x, y = queue.popleft()

    for k in range(4):
        nx = x + dx[k]
        ny = y + dy[k]

        if 0 <= nx < N and 0 <= ny < M and board[nx][ny] == 0:
            queue.append((nx, ny))
            board[nx][ny] = board[x][y] + 1

for i in range(N):
    for j in range(M):
        if board[i][j] == 0:
            count = -1

if count == -1:
    print(-1)
else:
    print(max(map(max, board)) - 1)
