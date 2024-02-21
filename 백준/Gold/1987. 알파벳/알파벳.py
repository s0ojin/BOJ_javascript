import sys
input = sys.stdin.readline

R, C = map(int, input().split())
board = [list(input().strip()) for _ in range(R)]
visited = set()
max_val = 0
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]


def dfs(x, y, count):
    global max_val
    max_val = max(count, max_val)

    for k in range(4):
        new_x = x + dx[k]
        new_y = y + dy[k]

        if 0 <= new_x < R and 0 <= new_y < C:
            if not board[new_x][new_y] in visited:
                visited.add(board[new_x][new_y])
                dfs(new_x, new_y, count+1)
                visited.remove(board[new_x][new_y])


visited.add(board[0][0])
dfs(0, 0, 1)
print(max_val)