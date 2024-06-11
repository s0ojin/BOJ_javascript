# 상우하좌
direction = [(-1,0),(0,1),(1,0),(0,-1)]
cctv_dir = [[], [1], [1,3], [0,1],[0,1,3],[0,1,2,3]]


def cal(tlst):
    visited = [[0]*(M+2) for _ in range(N+2)]

    for i in range(CNT):
        si, sj = cctv[i]
        rotate = tlst[i]
        type = board[si][sj]

        for dr in cctv_dir[type]:
            dr = (dr+rotate) % 4
            ci, cj = si, sj
            
            while True:
                ci, cj = ci+direction[dr][0], cj+direction[dr][1]
                if board[ci][cj] == 6:
                    break
                visited[ci][cj] = 1

    # 사각지대 갯수 세서 return

    cnt = 0
    for i in range(1, N+1):
        for j in range(1, M+1):
            if board[i][j] == 0 and visited[i][j] == 0:
                cnt += 1
    return cnt


def dfs(n, tlst):
    global answer
    if n == CNT:
        answer = min(answer, cal(tlst))
        return

    dfs(n+1, tlst+[0])
    dfs(n+1, tlst+[1])
    dfs(n+1, tlst+[2])
    dfs(n+1, tlst+[3])



N, M = map(int, input().split())
board = [[6]*(M+2)] + [[6]+list(map(int, input().split()))+[6] for _ in range(N)] + [[6]*(M+2)]
cctv = []
for i in range(1, N+1):
    for j in range(1, M+1):
        if 1<=board[i][j]<=5:
            cctv.append((i,j))


CNT = len(cctv)
answer = N*M
dfs(0, [])
print(answer)