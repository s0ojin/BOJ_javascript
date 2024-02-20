import sys
sys.setrecursionlimit(10**6)

M, N, K = map(int, input().split())
board = [[0] * N for _ in range(M)]
visited = [[0] * N for _ in range(M)]
answer = []
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
count = 0

for _ in range(K):
    x1, y1, x2, y2 = map(int, input().split())
    for i in range(M-1-y1, M-1-y2, -1):
        for j in range(x1, x2):
            board[i][j] = 1


def dfs(x, y):
    global count
    visited[x][y] = 1
    count += 1

    for k in range(4):
        new_x = x + dx[k]
        new_y = y + dy[k]

        if 0 <= new_x < M and 0 <= new_y < N:
            if not visited[new_x][new_y] and board[new_x][new_y] == 0:
                dfs(new_x, new_y)
                            

for i in range(M):
    for j in range(N):
        if not visited[i][j] and board[i][j] == 0:
            dfs(i, j)
            answer.append(count)
            count = 0


answer.sort()
print(len(answer))
print(*answer)