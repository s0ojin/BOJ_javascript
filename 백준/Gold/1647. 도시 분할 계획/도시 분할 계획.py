import sys
from heapq import heappop, heappush

input = sys.stdin.readline

def prim(start):
    visited = [0] * (N+2)
    pq = []
    min_cost = 0
    max_cost_edge = 0

    heappush(pq, (0, start))
 
    while pq:
        weight, cur = heappop(pq)

        if visited[cur]:
            continue
        
        visited[cur] = 1
        min_cost += weight
        max_cost_edge = max(max_cost_edge, weight)

        for new_weight, next in adj_list[cur]:
            if not visited[next]:
                heappush(pq, (new_weight, next))


    return min_cost - max_cost_edge


N ,M = map(int, input().split())
adj_list = [[] for _ in range(N+2)]

for _ in range(M):
    A, B, C = map(int, input().split())
    adj_list[A].append((C,B))
    adj_list[B].append((C,A))


print(prim(2))