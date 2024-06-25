import sys
from heapq import heappop, heappush


def prim(start):
    min_cost = 0
    visited = [0] * (N+1)
    pq = []

    heappush(pq, (0, start))
    while pq:
        weight, cur = heappop(pq)

        if visited[cur]:
            continue
        
        min_cost += weight
        visited[cur] = 1
        for new_weigth, next in adj_list[cur]:
            if not visited[next]:
                heappush(pq, (new_weigth, next))

    print(min_cost)
    return


N = int(input())
M = int(input())
adj_list = [[] for _ in range(N+1)]

for _ in range(M):
    a, b, c = map(int, input().split())
    # (가중치, node)
    adj_list[a].append((c,b))
    adj_list[b].append((c,a))


prim(1)