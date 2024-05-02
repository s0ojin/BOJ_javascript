N, M = map(int, input().split())
nums = list(map(int, input().split()))
stack = []
visited = [0] * (N+1)
answer = []

nums.sort()


def dfs(depth):
    if depth == M:
        if ' '.join(map(str, stack)) not in answer:
            answer.append(' '.join(map(str, stack)))
        return

    for idx, num in enumerate(nums):
        if not visited[idx]:
            visited[idx] = 1
            stack.append(num)
            dfs(depth+1)
            stack.pop()
            visited[idx] = 0


dfs(0)
print(*answer, sep='\n')
