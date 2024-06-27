import sys
from heapq import heappop, heappush

def prim(start):
    visited = [0] * (N+1)
    pq = []
    min_cost = 0

    heappush(pq, (0, start))

    while pq:
        weight, cur = heappop(pq)

        if visited[cur]:
            continue

        visited[cur] = 1
        min_cost += weight

        for next in range(1, N+1):
            if adj_mat[cur][next] and not visited[next]:
                heappush(pq, (adj_mat[cur][next], next))

    return min_cost


N = int(input())
adj_mat = [[0]*(N+1)] + [[0] + list(map(int, input().split())) for _ in range(N)]
print(prim(1))