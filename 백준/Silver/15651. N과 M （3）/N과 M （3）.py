N, M = map(int, input().split())

# 1부터 N까지 자연수에서 중복없이 M개 고른 수열
# 중복가능


stack = []
visited = [0] * (N+1)


def dfs(depth):
    if depth == M:
        print(*stack)
        return

    for i in range(1, N+1):
        stack.append(i)
        dfs(depth+1)
        stack.pop()


dfs(0)
