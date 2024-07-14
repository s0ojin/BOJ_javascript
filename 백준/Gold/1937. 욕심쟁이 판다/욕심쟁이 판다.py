import sys
sys.setrecursionlimit(100000)

N = int(input())
board = [list(map(int, input().split())) for _ in range(N)]
memo = {}

def in_range(x, y):
    return 0<=x<N and 0<=y<N


def dfs(cx, cy):
    if (cx,cy) in memo:
        return memo[(cx,cy)]
    
    max_length = 1
    for dx, dy in [(-1,0),(1,0),(0,-1),(0,1)]:
        nx, ny = cx+dx, cy+dy

        if in_range(nx,ny) and board[nx][ny] > board[cx][cy]:
            length = 1 + dfs(nx, ny)
            max_length = max(max_length, length)
    
    memo[(cx,cy)] = max_length
    return max_length


result = 0
for i in range(N):
    for j in range(N):
        result = max(result, dfs(i, j))

print(result)