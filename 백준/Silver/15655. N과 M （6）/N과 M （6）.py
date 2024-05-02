N, M = map(int, input().split())
nums = list(map(int, input().split()))
stack = []
visited = [0] * (N+1)

nums.sort()


def dfs(depth):
    if depth == M:
        print(*stack)
        return

    for idx, num in enumerate(nums):
        if stack and stack[-1] >= num:
            continue
        if not visited[idx]:
            visited[idx] = 1
            stack.append(num)
            dfs(depth+1)
            stack.pop()
            visited[idx] = 0


dfs(0)
