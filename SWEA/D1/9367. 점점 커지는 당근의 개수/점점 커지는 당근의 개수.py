T = int(input())
for idx in range(T):
    N = int(input())
    nums = list(map(int, input().split()))
    max_val = 0
    count = 1
    for i in range(1, N):
        if nums[i] > nums[i-1]:
            count += 1
        else:
            count = 1
        max_val = max(max_val, count)

    print(f'#{idx+1} {max_val}')