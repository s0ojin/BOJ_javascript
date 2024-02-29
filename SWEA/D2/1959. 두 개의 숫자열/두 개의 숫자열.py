T = int(input())
for idx in range(T):
    N, M = map(int, input().split())
    arr1 = list(map(int, input().split()))
    arr2 = list(map(int, input().split()))
    if M > N:
        arr1, arr2 = arr2, arr1
    max_val = 0

    for i in range(len(arr1)-len(arr2)+1):
        sum_val = 0
        for j in range(len(arr2)):
            sum_val += arr1[j+i] * arr2[j]
        max_val = max(max_val, sum_val)

    print(f'#{idx+1} {max_val}')