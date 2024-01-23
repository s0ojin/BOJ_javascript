import heapq
N = int(input())

times = []
for _ in range(N):
  S, T = map(int, input().split())
  times.append([S, T])

times.sort()

queue = []
heapq.heappush(queue, times.pop(0)[1])

for time in times:
  # 이번 타임의 시작 시간이 끝나는 시간보다 크면 pop
  if time[0] >= queue[0]:
    heapq.heappop(queue)
  heapq.heappush(queue, time[1])

print(len(queue))