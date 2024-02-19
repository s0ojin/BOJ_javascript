import sys
sys.setrecursionlimit(10**6)

N = int(input())
board = [list(input().strip()) for _ in range(N)]
visited = [[0] * N for _ in range(N)]
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
answer = [0, 0]

def dfs(color, x, y):
    visited[x][y] = 1
    for i in range(4):
        new_x = x + dx[i]
        new_y = y + dy[i]

        if 0 <= new_x < N and 0 <= new_y < N:
            if not visited[new_x][new_y] and board[new_x][new_y] == color:
                dfs(color, new_x, new_y)

for i in range(N):
    for j in range(N):
        if not visited[i][j]:
            dfs(board[i][j], i, j)
            answer[0] += 1

# board를 적록색약 버전으로 변경, visited초기화
for i in range(N):
    for j in range(N):
        visited[i][j] = 0
        if board[i][j] == "G":
            board[i][j] = "R"

for i in range(N):
    for j in range(N):
        if not visited[i][j]:
            dfs(board[i][j], i, j)
            answer[1] += 1

print(*answer)