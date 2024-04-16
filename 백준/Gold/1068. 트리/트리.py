N = int(input())
nodes = list(map(int, input().split()))
target = int(input())
adj_list = list([] for _ in range(N))
visited = [0] * N
answer = 0
start_node = 0

for idx, n in enumerate(nodes):
    if n == -1:
        start_node = idx

for child, parent in enumerate(nodes):
    if parent != -1:
        adj_list[parent].append(child)

# target 삭제
adj_list[target] = []

if start_node == target:
    print(0)
else:
    # bfs
    queue = [start_node]

    while queue:
        start = queue.pop(0)
        if not adj_list[start] and start != target:
            answer += 1

        # 루트가 리프노드일 때 처리
        if start == target and not queue:
            answer += 1

        for node in adj_list[start]:
            if node == target:
                if len(adj_list[start]) == 1:
                    answer += 1

            else:
                queue.append(node)

    print(answer)