N = int(input())
queue = list(range(1, N+1))

for i in range(N-1):
    print(queue.pop(0))
    queue.append(queue.pop(0))

print(queue[0])