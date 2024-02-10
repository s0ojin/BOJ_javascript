from collections import deque

T = int(input())

queue = deque(list(range(1, T+1)))

for i in range(T-1):
    queue.popleft()
    queue.append(queue.popleft())

print(queue[0])