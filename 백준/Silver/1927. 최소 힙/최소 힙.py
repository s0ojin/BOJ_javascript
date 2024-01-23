import heapq
import sys

N = int(input())

queue = []
for _ in range(N):
    x = int(sys.stdin.readline())
    if x == 0:
        if len(queue):
            print(heapq.heappop(queue))
        else:
            print(0)
    else:
        heapq.heappush(queue, x)