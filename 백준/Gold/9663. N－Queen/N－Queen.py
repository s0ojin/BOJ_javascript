N = int(input())
visited1 = [0] * N
visited2 = [0] * (2 * N - 1)
visited3 = [0] * (2 * N - 1)
count = 0


def dfs(depth):
    global count
    if depth == N:
        count += 1
        return

    for i in range(N):
        if not visited1[i] and not visited2[i+depth] and not visited3[i-depth+N-1]:
            visited1[i] = 1
            visited2[i + depth] = 1
            visited3[i-depth+N-1] = 1
            dfs(depth + 1)
            visited1[i] = 0
            visited2[i + depth] = 0
            visited3[i-depth+N-1] = 0


dfs(0)
print(count)