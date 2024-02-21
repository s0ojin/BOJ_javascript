N = int(input())
A, B = map(int, input().split())
M = int(input())
adj_list = [[] for _ in range(N+1)]
visited = [0] * (N+1)
answer = []

for i in range(M):
    parent, child = map(int, input().split())
    adj_list[parent].append(child)
    adj_list[child].append(parent)


def dfs(vertex, count):
    if vertex == B:
        answer.append(count)
        return

    for el in adj_list[vertex]:
        if not visited[el]:
            visited[el] = 1
            dfs(el, count+1)


dfs(A, 0)

if answer:
    print(answer[0])
else:
    print(-1)