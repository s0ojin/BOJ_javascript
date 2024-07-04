import sys
sys.setrecursionlimit(10**6)

# 날짜, 지각, 결석
def dfs(d,l,a):
    if l == 2 or a == 3:
        return 0
    if d == N:
        return 1
    
    if dp[d][l][a] == -1:
        dp[d][l][a] = dfs(d+1,l,0)+dfs(d+1, l+1,0)+dfs(d+1,l,a+1)

    return dp[d][l][a]

N = int(input())
dp = [[[-1,-1,-1] for _ in range(2)] for _ in range(N)]

print(dfs(0,0,0) % 1000000)
