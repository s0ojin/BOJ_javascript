import sys
sys.setrecursionlimit(10**6)


def dfs(x, y, depth):
    visited[x][y] = 1
    for k in range(4):
        new_x = x + dx[k]
        new_y = y + dy[k]
        if 0 <= new_x < N and 0 <= new_y < N:
            if not visited[new_x][new_y] and board[new_x][new_y] > depth:
                dfs(new_x, new_y, depth)


M = 101
max_val = 0
N = int(input())
board = [list(map(int, input().split())) for _ in range(N)]
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

while M >= 0:
    count = 0
    visited = [[0] * N for _ in range(N)]
    for i in range(N):
        for j in range(N):
            if not visited[i][j] and board[i][j] > M:
                count += 1
                dfs(i, j, M)

    max_val = max_val if max_val > count else count
    M -= 1

print(max_val)
