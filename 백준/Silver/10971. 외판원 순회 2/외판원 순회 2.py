N = int(input())
board = [list(map(int,input().split())) for _ in range(N)]
min_cost = 2e10
start = -1
visited = [0]*N

def dfs(current, cnt, total_cost):
    global min_cost
    if cnt == N:
        # 마지막도시에서 처음으로 돌아갈 수 있다면
        if board[current][start]:
            min_cost = min(min_cost, total_cost+board[current][start])
        return
    
    for i in range(N):
        if not visited[i] and board[current][i]:
            visited[i] = 1
            dfs(i,cnt+1,total_cost+board[current][i])
            visited[i] = 0


for i in range(N):
    visited[i] = 1
    start = i
    dfs(i,1,0)

print(min_cost)