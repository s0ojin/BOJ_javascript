N = int(input())

data = list(map(int, input().split()))
data.sort(reverse=True)

result = []
for i in range(N):
    result.append(data[i]+ 1 + i)

print(max(result) + 1)