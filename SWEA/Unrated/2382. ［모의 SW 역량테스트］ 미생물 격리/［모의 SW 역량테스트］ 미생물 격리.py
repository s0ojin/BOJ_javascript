T = int(input())
# 상하좌우
dt = [0, (-1,0), (1,0), (0,-1), (0,1)]

def move():
    global board
    # 전체 한번 순회하고

    for i in range(N):
        for j in range(N):
            # 셀에 군집이 존재하고, 움직이지 않은 군집이면
            if board[i][j] and not board[i][j][0][2]:

                group = board[i][j].pop(0)
                n, d, moved = group
                rd, cd = dt[d]
                new_i, new_j = i+rd, j+cd
            
                # 약물처리 칸이면
                if new_i == 0 or new_j == 0 or new_i == N-1 or new_j == N-1:
                    # 반 죽이고
                    n //= 2

                    # 방향전환
                    if n != 0:
                        if d % 2 == 0:
                            d -= 1
                        else:
                            d += 1
                if n != 0:        
                    board[new_i][new_j].append((n, d, 1))
                
    
    # 만약 한셀에 여러 군집이 있으면 합쳐주기
    for i in range(N):
        for j in range(N):
            if len(board[i][j]) > 1:
                biggest_tuple = max(board[i][j], key=lambda x: x[0])
                n = sum(x[0] for x in board[i][j])
                d = biggest_tuple[1]
                board[i][j] = [(n, d, 0)]
            # 움직임 여부 초기화
            if board[i][j]:
                n, d, moved = board[i][j][0]
                board[i][j][0] = (n, d, 0)


for tc in range(1, T+1):
    N, M, K = map(int, input().split())
    count = 0
    board = [list([] for _ in range(N)) for _ in range(N)]
    
    for i in range(K):
        row, col, num, direction = map(int, input().split())
        # 미생물 수, 방향, 움직임 여부
        board[row][col].append((num, direction, 0))

    while M > 0:
        move()
        M -= 1

    for i in range(N):
        for j in range(N):
            if board[i][j]:
                count += board[i][j][0][0]

    print(f'#{tc} {count}')