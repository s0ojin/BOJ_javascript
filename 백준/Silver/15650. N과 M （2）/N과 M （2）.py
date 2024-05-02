
N, M = map(int, input().split())

# 1부터 N까지 자연수에서 중복없이 M개 고른 수열


stack = []


def dfs(depth):
    if depth == M:
        print(*stack)

    for i in range(1, N+1):
        if i in stack or (stack and stack[-1] > i):
            continue
        stack.append(i)
        dfs(depth+1)
        stack.pop()


dfs(0)