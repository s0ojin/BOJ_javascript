import sys
from heapq import heappush, heappop

V, E = map(int, input().split())
visited = [0] * (V + 1)

adj_list = [[] for _ in range(V + 1)]

for _ in range(E):
    A, B, C = map(int, input().split())
    adj_list[A].append((B, C))
    adj_list[B].append((A, C))

def prim(start):
    sum_weight = 0
    pq = []
    
    heappush(pq, (0, start))

    while pq:
        cur_weight, cur = heappop(pq)

        if visited[cur]:
            continue
        
        visited[cur] = 1
        sum_weight += cur_weight

        for next, next_weight in adj_list[cur]:
            if not visited[next]:
                heappush(pq, (next_weight, next))

    print(sum_weight)

prim(1)
