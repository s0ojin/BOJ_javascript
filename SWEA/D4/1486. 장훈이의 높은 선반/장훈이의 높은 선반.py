def dfs(idx, sum_height):
    global answer
    if sum_height >= B:
        answer = min(answer, sum_height)
        return
    
    if idx == N:
        return
    
    # 쌓는다
    dfs(idx+1, sum_height + heights[idx])
    # 안쌓는다
    dfs(idx+1, sum_height)

T = int(input())
for tc in range(1, T+1):
    N, B = map(int, input().split())
    heights = list(map(int, input().split()))
    answer = int(1e9)
    dfs(0, 0)

    print(f'#{tc} {answer -B}')