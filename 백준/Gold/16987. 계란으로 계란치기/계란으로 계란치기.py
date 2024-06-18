N = int(input())
eggs = []
max_cnt = 0

for i in range(N):
    eggs.append(list(map(int, input().split())))


def dfs(cur, broken_cnt):
    global max_cnt

    if cur == N:
        max_cnt = max(max_cnt, broken_cnt)
        return

    # 현재 계란이 깨진 계란이면 그냥 다음으로 넘김
    if eggs[cur][0] <= 0:
        dfs(cur+1, broken_cnt)
    
    else:
        # 현재 든 계란 제외하고 순회
        flag = False
        for idx in range(N):
            # 들고있는 계란 번호거나 깨진 계란이면 pass 
            if idx == cur or eggs[idx][0] <= 0:
                continue

            flag = True

            eggs[cur][0] -= eggs[idx][1]
            eggs[idx][0] -= eggs[cur][1]
            dfs(cur+1, broken_cnt + int(eggs[cur][0] <= 0) + int(eggs[idx][0] <= 0))
            eggs[cur][0] += eggs[idx][1]
            eggs[idx][0] += eggs[cur][1]

        if flag == False:
            dfs(cur+1, broken_cnt)

dfs(0,0)
print(max_cnt)
