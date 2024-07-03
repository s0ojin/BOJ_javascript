import sys

M, N = map(int, input().split())
# 상하좌우
dt = [(0,1),(1,0),(0,-1),(-1,0)]


def in_range(i,j):
    global N, M
    return 0<=i<M and 0<=j<N


def solution():
    global N, M
    board = [[0]*N for _ in range(M)]
    ci, cj = 0, 0
    num = 1
    turn_cnt = 0

    # 막히거나 갈곳이 없을 때까지 반복
    while in_range(ci,cj) and not board[ci][cj]:
        # 방향반복
        for i in range(4):
            # 만약 막히면
            if not in_range(ci,cj) or board[ci][cj]:
                break

            # 안막히면 반복
            while True:
                board[ci][cj] = num
                num += 1
                ni, nj = ci+dt[i][0], cj+dt[i][1]

                # 방향전환
                if not in_range(ni, nj) or board[ni][nj]:
                    turn_cnt += 1
                    ci += dt[(i+1) % 4][0]
                    cj += dt[(i+1) % 4][1]
                    break

                ci, cj = ni, nj

    print(turn_cnt - 1)


solution()
