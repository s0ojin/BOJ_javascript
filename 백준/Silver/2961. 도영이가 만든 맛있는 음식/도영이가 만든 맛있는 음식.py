import sys
N = int(input())
min_diff = sys.maxsize
foods = []

for i in range(N):
    foods.append(tuple(map(int, input().split())))


def dfs(cur, total_s, total_b):
    global min_diff
    
    if cur == N:
        if total_b:
            min_diff = min(min_diff, abs(total_s - total_b))
        return
    
    dfs(cur+1, foods[cur][0] * total_s, foods[cur][1] + total_b)
    dfs(cur+1, total_s, total_b)


dfs(0,1,0)
print(min_diff)