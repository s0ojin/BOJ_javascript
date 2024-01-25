N = int(input())
ropes = [int(input()) for _ in range(N)]

ropes.sort(reverse=True)

answer = []

for i in range(N):
    answer.append(ropes[i] * (i+1))

print(max(answer))