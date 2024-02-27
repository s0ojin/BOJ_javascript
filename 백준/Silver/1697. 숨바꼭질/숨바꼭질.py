N, K = map(int, input().split())
visited = [0] * 100001
queue = [[N, 0]]

while queue:
    cur, depth = queue.pop(0)

    if visited[cur]:
        continue

    visited[cur] = 1

    if cur == K:
        print(depth)
        break

    for next in [cur+1, cur-1, cur*2]:
        if 0 <= next <= 100000 and not visited[next]:
            queue.append([next, depth+1])
