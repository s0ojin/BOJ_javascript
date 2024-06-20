N, K = map(int, input().split())

queue = [i+1 for i in range(N)]
answer = []

num = 0
while queue:
    num += K-1
    if num >= len(queue):
        num = num % len(queue)

    answer.append(queue.pop(num))

print(f'<{str(answer)[1:-1]}>')