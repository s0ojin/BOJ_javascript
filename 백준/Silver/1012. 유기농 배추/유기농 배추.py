import sys
sys.setrecursionlimit(10**6)

T = int(input())
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]


def dfs(x, y):
    for k in range(4):
        nx = x + dx[k]
        ny = y + dy[k]

        if 0 <= nx < N and 0 <= ny < M and not visited[nx][ny] and board[nx][ny] == 1:
            visited[nx][ny] = 1
            dfs(nx, ny)


for _ in range(T):
    M, N, K = map(int, input().split())
    board = [[0] * M for _ in range(N)]
    visited = [[0] * M for _ in range(N)]
    count = 0

    for _ in range(K):
        X, Y = map(int, input().split())
        board[Y][X] = 1

    for i in range(N):
        for j in range(M):
            if not visited[i][j] and board[i][j] == 1:
                count += 1
                dfs(i, j)

    print(count)

