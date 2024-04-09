def dfs(plus, minus, multiply, division, cnt, ans):
    global min_val, max_val
    if cnt == N:
        min_val = min(min_val, ans)
        max_val = max(max_val, ans)
        return
    if plus:
        dfs(plus-1, minus, multiply, division, cnt+1, ans+nums[cnt])
    if minus:
        dfs(plus, minus-1, multiply, division, cnt+1, ans-nums[cnt] )
    if multiply:
        dfs(plus, minus, multiply-1, division, cnt+1, ans*nums[cnt])
    if division:
        dfs(plus, minus, multiply, division-1, cnt+1, int(ans/nums[cnt]))
    

T = int(input())

for tc in range(1, T+1):
    N = int(input())
    operation_cnt = list(map(int, input().split()))
    nums = list(map(int, input().split()))
    min_val = 1e9
    max_val = -1e9

    dfs(*operation_cnt, 1, nums[0])
    print(f'#{tc} {max_val-min_val}')
