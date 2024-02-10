n, w, l = map(int, input().split())
weights = list(map(int, input().split()))
queue = [0] * w
time = 0

while True:
    if not weights:
        break

    queue.pop(0)
    if sum(queue) + weights[0] <= l:
        queue.append(weights.pop(0))
    else:
        queue.append(0)
    
    time += 1
time += len(queue)
print(time)
