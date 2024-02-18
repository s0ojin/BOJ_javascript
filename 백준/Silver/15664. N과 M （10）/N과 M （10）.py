N, M = map(int, input().split())
nums = list(map(int, input().split()))
nums. sort()
visited = [0] * N
stack = []
answer = []

def dfs(depth, idx):
    if depth == M:
        if not tuple(stack) in answer: 
            answer.append(tuple(stack))
        return

    for i in range(N):
        if not visited[i] and i > idx:
            visited[i] = 1
            stack.append(nums[i])
            dfs(depth+1, i)
            stack.pop()
            visited[i] = 0
    
dfs(0, -1)

for ans in answer:
    print(*ans)