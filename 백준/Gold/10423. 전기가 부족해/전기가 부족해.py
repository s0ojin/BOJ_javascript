import sys
from heapq import heappop, heappush

def prim(start):
    visited = [0] * (N+1)
    min_cost = 0
    pq = []

    for power_plant in start:
        heappush(pq, (0, power_plant))
    
    while pq:
        weight, cur = heappop(pq)

        if visited[cur]:
            continue

        visited[cur] = 1
        min_cost += weight
    
        for new_weight, next in adj_list[cur]:
            if not visited[next]:
                heappush(pq, (new_weight, next))
    
    return min_cost


N,M,K = map(int, input().split())
power_plants = list(map(int, input().split()))
adj_list = [[] for _ in range(N+1)]

for _ in range(M):
    u, v, w = map(int, input().split())
    adj_list[u].append((w,v))
    adj_list[v].append((w,u))


result = prim(power_plants)
print(result)