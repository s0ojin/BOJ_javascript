expression = input()

arr = list(map(str,expression.split('-')))

for i in range(len(arr)):
    if '+' in arr[i]:
        arr[i] = sum(map(int, arr[i].split('+')))

arr = list(map(int, arr))

answer = arr[0]
for i in range(1,len(arr)):
    answer -= arr[i]

print(answer)