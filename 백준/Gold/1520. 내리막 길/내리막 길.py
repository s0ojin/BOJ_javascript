import sys
sys.setrecursionlimit(10**6)

M, N = map(int, input().split())
board = [list(map(int, input().split())) for _ in range(M)]
dp = [[-1]*N for _ in range(M)]
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]


def dfs(x, y):
    if x == M-1 and y == N-1:
        return 1

    # 방문한 적 있으면
    if dp[x][y] != -1:
        return dp[x][y]

    temp = 0
    for k in range(4):
        nx = x + dx[k]
        ny = y + dy[k]

        if 0 <= nx < M and 0 <= ny < N and board[nx][ny] < board[x][y]:
            temp += dfs(nx, ny)

    dp[x][y] = temp
    return dp[x][y]


print(dfs(0, 0))