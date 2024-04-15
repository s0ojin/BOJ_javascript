N, M = map(int, input().split())
adj_list = list([] for _ in range(N+1))

for _ in range(N-1):
    node1, node2, distance = map(int, input().split())
    adj_list[node1].append((node2, distance))
    adj_list[node2].append((node1, distance))

for _ in range(M):
    from_node, to_node = map(int, input().split())
    visited = [0] * (N+1)
    queue = [(from_node, 0)]
    visited[from_node] = True

    while queue:
        node, acc_dist = queue.pop(0)

        if node == to_node:
            print(acc_dist)
            break

        for end, dist in adj_list[node]:
            if not visited[end]:
                visited[end] = 1
                queue.append((end, acc_dist + dist))